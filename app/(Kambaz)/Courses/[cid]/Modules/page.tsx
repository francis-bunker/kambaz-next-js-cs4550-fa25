"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react"; import { useParams } from "next/navigation";
import * as db from "@/app/(Kambaz)/Database";

import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../../client";

export default function Modules() {
  const { courses, modules: dbModules } = db;
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);
  const onCreateModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const modulee = await client.createModuleForCourse(cid as string, newModule);
    dispatch(setModules([...modules, modulee]));
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
  const onUpdateModule = async (module: any) => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };
  return (
    <div>
      <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={onCreateModuleForCourse} />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules
          .map((module: any) => (
            <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray" key={module._id} >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <FormControl className="w-50 d-inline-block"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") { // Use async here to await the update
                        const newModule = { ...module, name: e.currentTarget.value, editing: false };
                        (async () => await onUpdateModule(newModule))();
                      }
                    }}
                    defaultValue={module.name} />
                )}
                <ModuleControlButtons
                  deleteModule={(moduleId) => onRemoveModule(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} moduleId={module._id} />              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0" key={module._id} >
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem className="wd-lesson p-3 ps-1" key={lesson._id} >
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </ListGroupItem>
                  ))}</ListGroup>)}</ListGroupItem>))}

      </ListGroup>
    </div>
  );
}
