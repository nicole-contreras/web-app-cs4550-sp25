export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <div id="wd-module-buttons">
            <button id="wd-collapse-button" className="wd-canvas-button">Collapse All</button>
            <button id="wd-progress-button" className="wd-canvas-button">View Progress</button>
            <select id="wd-publish-button" className="wd-canvas-button">
                <option value="PUBLISH">Publish All</option>
            </select>
            <button id="wd-module-button" className="wd-canvas-button">+ Module</button>

        </div>
        <ul id="wd-modules">
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
  );}
  