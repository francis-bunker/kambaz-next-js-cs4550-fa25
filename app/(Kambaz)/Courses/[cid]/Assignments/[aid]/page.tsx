export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
      </table>
      <label htmlFor="wd-select-group"> Assignment Group </label>
      <select id="we-select-group">
        <option value="ASSIGNMENTS">assignments</option>
        <option value="QUIZES">quizes</option>
      </select>
      <br /><br />
      <label htmlFor="wd-select-display"> Display grade as </label>
      <select id="we-select-display">
        <option value="persentage">Persentage</option>
        <option value="points">points</option>
      </select>
      <br /><br />
      <label htmlFor="wd-select-submission-type"> Submission Type </label>
      <select id="we-select-submission-type">
        <option value="ONLINE">online</option>
        <option value="IN-PERSON">in person</option>
      </select>
      <br /><br />
      <label>Online Entry Options</label><br />

      <input type="checkbox" name="entry-options" id="wd-chkbox-text" />
      <label htmlFor="wd-chkbox-comedy">Text Entry</label><br />

      <input type="checkbox" name="entry-options" id="wd-chkbox-website" />
      <label htmlFor="wd-chkbox-drama">Website</label><br />

      <input type="checkbox" name="entry-options" id="wd-chkbox-media" />
      <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br />

      <input type="checkbox" name="entry-options" id="wd-chkbox-annotation" />
      <label htmlFor="wd-chkbox-fantasy">Student Annotation</label><br />

      <input type="checkbox" name="centry-options" id="wd-chkbox-annotation" />
      <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
      <br /><br />
                <label htmlFor="wd-text-fields-assign-to"> assign to: </label>
          <input type="text"
            placeholder="everyone"
            id="wd-text-fields-assign-to" /><br />

                      <label htmlFor="wd-text-fields-due"> due date: </label>
          <input type="date"
            defaultValue="2028-01-21"
            id="wd-text-fields-due" /><br />

                      <label htmlFor="wd-text-fields-avalible-from"> Avalible from: </label>
          <input type="date"
            defaultValue="2040-01-21"
            id="wd-text-fields-avalible-from" />
                      <label htmlFor="wd-text-fields-avalible-until"> Until: </label>
          <input type="date"
            defaultValue="2050-01-21"
            id="wd-text-fields-avalible-until" /><br />

      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}
