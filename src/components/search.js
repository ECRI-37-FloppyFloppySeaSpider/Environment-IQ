// Class Search extends Component

import React, { component } from 'react';

// export const handleClick = () => {
//     console.log('y')
//     let number = document.getElementById('number')
//     let transportation = document.getElementById('transportation')
//     fetch('/getdata', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'Application/JSON'
//         },
//         body: JSON.stringify({passengers: number, transportation: transportation})
//     })
// }

const Search = (props) => {
  // const handleClick = () => {
  //     let state = document.getElementById('state').value
  //     let disaster = document.getElementById('disaster').value
  //     // console.log(`/disaster/${state}/${disaster}`)
  //     // fetch(`/disaster/${state}/${disaster}`)
  //     // .then((response) => response.json())
  //     // .then((data) => setGraphData(data));
  //     let data = {
  //         labels: ['Jun', 'Jul', 'Aug', 'Sept'],
  //         datasets: [
  //           {
  //             id: 1,
  //             label: 'icecream',
  //             data: [5, 6, 7, 8],
  //           },
  //           {
  //             id: 2,
  //             label: 'pancakes',
  //             data: [3, 2, 1, 0],
  //           },
  //         ],
  //       }
  //       setGraphData(data)
  // }

  return (
    <div>
      <label htmlFor='byState'>State:</label>
      <select id='state' name='state'>
        <option value='AL'>Alabama</option>
        <option value='AK'>Alaska</option>
        <option value='AZ'>Arizona</option>
        <option value='AK'>Arkansas</option>
        <option value='CA'>California</option>
        <option value='CO'>Colorado</option>
        <option value='CT'>Conneticut</option>
        <option value='DE'>Delaware</option>
        <option value='DC'>Washington D.C.</option>
        <option value='FL'>Florida</option>
        <option value='GA'>Georgia</option>
        <option value='HI'>Hawaii</option>
        <option value='ID'>Idaho</option>
        <option value='IL'>Illinois</option>
        <option value='IN'>Indiana</option>
        <option value='IA'>Iowa</option>
        <option value='KS'>Kansas</option>
        <option value='KY'>Kentucky</option>
        <option value='LA'>Louisiana</option>
        <option value='ME'>Maine</option>
        <option value='MD'>Maryland</option>
        <option value='MA'>Massachussets</option>
        <option value='MI'>Michigan</option>
        <option value='MN'>Minnesota</option>
        <option value='MS'>Mississippi</option>
        <option value='MO'>Missouri</option>
        <option value='MT'>Montana</option>
        <option value='NE'>Nebraska</option>
        <option value='NV'>Nevada</option>
        <option value='NH'>New Hampshire</option>
        <option value='NJ'>New Jersey</option>
        <option value='NM'>New Mexico</option>
        <option value='NY'>New York</option>
        <option value='NC'>North Carolina</option>
        <option value='ND'>North Dakota</option>
        <option value='OH'>Ohio</option>
        <option value='OK'>Oklahoma</option>
        <option value='OR'>Oregon</option>
        <option value='PA'>Pennsylvania</option>
        <option value='RI'>Rhode Island</option>
        <option value='SC'>South Carolina</option>
        <option value='SD'>South Dakota</option>
        <option value='TN'>Tennessee</option>
        <option value='TX'>Texas</option>
        <option value='UT'>Utah</option>
        <option value='VT'>Vermont</option>
        <option value='VA'>Virginia</option>
        <option value='WA'>Washington</option>
        <option value='WV'>West Virginia</option>
        <option value='WI'>Wisconsin</option>
        <option value='WY'>Wyoming</option>
      </select>
      <span>
        <label htmlFor='disaster'>Disaster Type:</label>
        <select id='disaster' name='disaster'>
          <option value='Flood'>Flood</option>
          <option value='Fire'>Fire</option>
          <option value='Earthquake'>Earthquake</option>
          <option value='SevereStorms'>Severe Storm</option>
          <option value='Hurricane'>Hurricane</option>
          <option value='Tornado'>Tornado</option>
          <option value='Freezing'>Freezing</option>
          <option value='Drought'>Drought</option>
          <option value='All'>All</option>
        </select>
        <option value='Alabama'></option>
      </span>
      <span>
        <button onClick={props.handleClick}>Enter</button>
      </span>
    </div>
  );
};

export default Search;
