export default function Modules() {
  return (
    <div>
      <button type="button"
        id="wd-collapse">
        Colappse all
      </button>
      <button type="button"
        id="wd-progress">
        View Progress
      </button>
              <select id="wd-select-one-publish">
          <option value="COMEDY">publish all</option>
          <option value="DRAMA">publish some</option>
        </select>
      <ul>
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
  );
}
