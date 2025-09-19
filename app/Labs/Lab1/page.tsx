export default function Lab1() {
  return (
    <div id="wd-lab1">

      <div id="wd-forms">
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label>
          <input placeholder="jdoe" id="wd-text-fields-username" /> <br />
          <label htmlFor="wd-text-fields-password">Password:</label>
          <input type="password" defaultValue="123@#$asd"
            id="wd-text-fields-password" /><br />
          <label htmlFor="wd-text-fields-first-name">First name:</label>
          <input type="text" title="John" id="wd-text-fields-first-name" /> <br />
          <label htmlFor="wd-text-fields-last-name">Last name:</label>
          <input type="text" placeholder="Doe"
            defaultValue="Wonderland"
            title="The last name"
            id="wd-text-fields-last-name" />
          <h5>Text boxes</h5>
          <label>Biography:</label><br />
          <textarea
            id="wd-textarea"
            cols={30}
            rows={10}
            defaultValue={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin volutpat molestie. Duis vehicula non lacus et sagittis. Fusce quis elit mi. Suspendisse nec erat suscipit, finibus orci vitae, lacinia ante. Aenean orci felis, dapibus non pretium in, convallis eget ipsum. Donec vitae posuere erat. Quisque eu pretium nisl. Proin non ultricies est. Sed dignissim rhoncus pretium. Ut erat lacus, vehicula vitae erat ut, vulputate luctus arcu. Donec commodo condimentum est sed tincidunt. Etiam euismod arcu erat, ut sollicitudin ligula mollis in. Pellentesque eleifend ante a urna vulputate vehicula. Phasellus elementum, est at pulvinar volutpat, libero sapien ornare turpis, a facilisis enim sapien quis massa. Fusce ut magna tellus.`}
          />         <h4>Other HTML field types</h4>


          <label htmlFor="wd-text-fields-email"> Email: </label>
          <input type="email"
            placeholder="jdoe@somewhere.com"
            id="wd-text-fields-email" /><br />


          <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
          <input type="number"
            defaultValue="100000"
            placeholder="1000"
            id="wd-text-fields-salary-start" /><br />


          <label htmlFor="wd-text-fields-rating"> Rating: </label>
          <input type="range"
            defaultValue="4"
            max="5"
            placeholder="Doe"
            id="wd-text-fields-rating" /><br />


          <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
          <input type="date"
            defaultValue="2000-01-21"
            id="wd-text-fields-dob" /><br />
        </form>
        <h5 id="wd-buttons">Buttons</h5>
        <button type="button"
          id="wd-all-good">
          Hello World!
        </button>


        <h5 id="wd-radio-buttons">Radio buttons</h5>
        <label>Favorite movie genre:</label><br />
        <input type="radio" name="radio-genre" id="wd-radio-comedy" />
        <label htmlFor="wd-radio-comedy">Comedy</label><br />
        <input type="radio" name="radio-genre" id="wd-radio-drama" />
        <label htmlFor="wd-radio-drama">Drama</label><br />
        <input type="radio" name="radio-genre" id="wd-radio-scifi" />
        <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
        <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
        <label htmlFor="wd-radio-fantasy">Fantasy</label>


        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label><br />


        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
        <label htmlFor="wd-chkbox-comedy">Comedy</label><br />


        <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
        <label htmlFor="wd-chkbox-drama">Drama</label><br />


        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
        <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />


        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
        <label htmlFor="wd-chkbox-fantasy">Fantasy</label>


        <h4 id="wd-dropdowns">Dropdowns</h4>


        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
        <select id="wd-select-one-genre">
          <option value="COMEDY">Comedy</option>
          <option value="DRAMA">Drama</option>
          <option value="SCIFI">
            Science Fiction</option>
          <option value="FANTASY">Fantasy</option>
        </select>


        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
        <select multiple id="wd-select-many-genre">
          <option value="COMEDY"> Comedy          </option>
          <option value="DRAMA">           Drama           </option>
          <option value="SCIFI"> Science Fiction </option>
          <option value="FANTASY">         Fantasy         </option>
        </select>


        <h4>Anchor tag</h4>
        Please
        <a href="https://www.lipsum.com" id="wd-lipsum"> click here</a>
        to get dummy text<br />

        <a href="https://github.com/francis-bunker/kambaz-next-js-cs4550-fa25" id="wd-github">click here </a>
        for my github<br />
      </div>
    </div>
  );
}





