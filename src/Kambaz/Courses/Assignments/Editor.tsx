export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br />
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
            <tr>
                <td>
                    <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-group">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="wd-display-grade-as">Display Grade</label>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                        <option value="PERCENTAGE">Percentage</option>
                        <option value="POINTS">Points</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type">
                        <option value="Online">Online</option>
                    </select>
                </td>
            </tr>
            <tr>
                <br />
            
            </tr>
            <tr>
                <br />
                <td align="left">
                    <form id="wd-submission-type">
                        Online Entry Options <br/>
                        <input type="checkbox" id="wd-text-entry" name="textentry" value="Text Entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" id="wd-website-url" name="website url" value="Website URL" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" id="wd-media-recording" name="media" value="Media Recording" />
                        <label htmlFor="wd-media-recording">Media Recording</label><br />
                        <input type="checkbox" id="wd-student-annotation" name="student annotation" value="Student Annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        <input type="checkbox" id="wd-file-upload" name="fileuploads" value="File Uploads" />
                        <label htmlFor="wd-media-recording">File Uploads</label><br />
                    </form>
                </td>
            </tr> <br />
            <tr>
                <td align="right">
                    Assign To
                </td>
            </tr>
            <tr>
                <br />
                <td align="right">
                    <input type="text" id="wd-assign-to" defaultValue="Everyone"></input>
                </td>
            </tr> <br />
            <tr> <br />
                <td align="left">
                    <td align="left">Due</td>
                    <input type="date" id="wd-due-date" defaultValue="2026-01-01"></input>
                </td>
            </tr><br />
            <tr><br />
                <td>
                    Available from
                </td>
                <td align="left">
                    Until
                </td>
            </tr>
            <tr>< br/>
                <td align ="left">
                    <input type="date" id="wd-available-from" defaultValue="2026-01-01"></input>
                </td>
                <td align="left">
                    <input type="date" id="wd-available-until" defaultValue="2026-01-01"></input>
                </td>
            </tr>
            <tr>
                <td colSpan={3}>
                <hr />
                </td>
            </tr>
            <tfoot>
                <td colSpan={2} />
                <td align="left">
                    <button>Cancel</button> <button>Save</button>
                </td>
            </tfoot>
        </table> 
        </div>
    );
}