const industries = [{
    industry: "Arts & Entertainment", benchmarks: {
        CPM: 2.60, CPMMax: 8.80,
        CPC: 1.30, CPCMax: 5.20,
        CTR: 0.14, CTRMax: 0.25,
        CPM2: 0.80, CPM2Max: 2.90,
        CPC2: 0.30, CPC2Max: 1.00,
        CNV: 0.70, CNVMax: 2.50
    }
}, {
    industry: "Automotive & Sports", benchmarks: {
        CPM: 1.10, CPMMax: 6.10,
        CPC: 0.40, CPCMax: 2.60,
        CTR: 0.18, CTRMax: 0.30,
        CPM2: 1.10, CPM2Max: 3.10,
        CPC2: 0.40, CPC2Max: 1.10,
        CNV: 1.10, CNVMax: 3.20
    }
}, {
    industry: "Business & Careers", benchmarks: {
        CPM: 4.00, CPMMax: 11.80,
        CPC: 1.70, CPCMax: 7.10,
        CTR: 0.13, CTRMax: 0.27,
        CPM2: 1.00, CPM2Max: 3.50,
        CPC2: 0.40, CPC2Max: 1.00,
        CNV: 1.00, CNVMax: 3.20
    }
}, {
    industry: "Family Parenting & Society", benchmarks: {
        CPM: 4.20, CPMMax: 10.60,
        CPC: 1.60, CPCMax: 5.10,
        CTR: 0.17, CTRMax: 0.31,
        CPM2: 1.00, CPM2Max: 3.00,
        CPC2: 0.40, CPC2Max: 2.10,
        CNV: 1.00, CNVMax: 4.20
    }
}, {
    industry: "Health Fitness & Food", benchmarks: {
        CPM: 1.10, CPMMax: 8.30,
        CPC: 0.40, CPCMax: 4.20,
        CTR: 0.17, CTRMax: 0.29,
        CPM2: 1.10, CPM2Max: 3.30,
        CPC2: 0.40, CPC2Max: 1.00,
        CNV: 1.00, CNVMax: 2.50
    }
}, {
    industry: "Home/Garden, Pets & Hobbies", benchmarks: {
        CPM: 1.00, CPMMax: 2.00,
        CPC: 0.40, CPCMax: 0.90,
        CTR: 0.21, CTRMax: 0.32,
        CPM2: 1.60, CPM2Max: 4.80,
        CPC2: 0.50, CPC2Max: 1.10,
        CNV: 1.00, CNVMax: 3.80
    }
}, {
    industry: "News, Politics & Law", benchmarks: {
        CPM: 1.30, CPMMax: 2.80,
        CPC: 0.50, CPCMax: 1.50,
        CTR: 0.16, CTRMax: 0.28,
        CPM2: 0.90, CPM2Max: 4.10,
        CPC2: 0.30, CPC2Max: 1.30,
        CNV: 0.80, CNVMax: 6.70
    }
}, {
    industry: "Personal Finance", benchmarks: {
        CPM: 1.60, CPMMax: 9.90,
        CPC: 0.60, CPCMax: 5.00,
        CTR: 0.17, CTRMax: 0.31,
        CPM2: 0.90, CPM2Max: 3.50,
        CPC2: 0.40, CPC2Max: 0.90,
        CNV: 1.10, CNVMax: 2.40
    }
}, {
    industry: "Real Estate", benchmarks: {
        CPM: 1.70, CPMMax: 7.30,
        CPC: 0.70, CPCMax: 3.30,
        CTR: 0.18, CTRMax: 0.31,
        CPM2: 1.50, CPM2Max: 5.50,
        CPC2: 0.40, CPC2Max: 3.70,
        CNV: 1.10, CNVMax: 5.60
    }
}, {
    industry: "Retail", benchmarks: {
        CPM: 0.80, CPMMax: 2.90,
        CPC: 0.20, CPCMax: 1.30,
        CTR: 0.22, CTRMax: 0.48,
        CPM2: 0.50, CPM2Max: 1.00,
        CPC2: 0.10, CPC2Max: 0.40,
        CNV: 0.60, CNVMax: 1.40
    }
}, {
    industry: "Style & Fashion", benchmarks: {
        CPM: 4.20, CPMMax: 12.50,
        CPC: 1.50, CPCMax: 5.40,
        CTR: 0.18, CTRMax: 0.32,
        CPM2: 0.80, CPM2Max: 2.60,
        CPC2: 0.40, CPC2Max: 0.80,
        CNV: 1.00, CNVMax: 2.10
    }
}, {
    industry: "Technology & Computing", benchmarks: {
        CPM: 3.70, CPMMax: 11.30,
        CPC: 1.90, CPCMax: 7.80,
        CTR: 0.10, CTRMax: 0.24,
        CPM2: 0.80, CPM2Max: 2.70,
        CPC2: 0.30, CPC2Max: 0.80,
        CNV: 0.90, CNVMax: 2.70
    }
}, {
    industry: "Travel", benchmarks: {
        CPM: 1.50, CPMMax: 4.00,
        CPC: 0.40, CPCMax: 1.80,
        CTR: 0.23, CTRMax: 0.47,
        CPM2: 0.40, CPM2Max: 0.60,
        CPC2: 0.00, CPC2Max: 0.10,
        CNV: 0.20, CNVMax: 0.20
    }
}, {
    industry: "Other", benchmarks: {
        CPM: 0.80, CPMMax: 7.20,
        CPC: 0.20, CPCMax: 3.40,
        CTR: 0.20, CTRMax: 0.45,
        CPM2: 0.50, CPM2Max: 1.60,
        CPC2: 0.20, CPC2Max: 0.60,
        CNV: 0.80, CNVMax: 1.90
    }
}
]


const artsEnt = industries[0]
const autoSports = industries[1]
const businessCar = industries[2]
const famParentingSoc = industries[3]
const healthFitnessFood = industries[4]
const homeGardenPetsHobbies = industries[5]
const newsPoliticsLaw = industries[6]
const personalFinance = industries[7]
const realEstate = industries[8]
const retail = industries[9]
const styleFashion = industries[10]
const techComputing = industries[11]
const travel = industries[12]
const other = industries[13]
let globalIndustry
let orders
let averageVal
let visitors
let CPM
let CPMMax
let CPC
let CPCMax
let CTR
let CTRMax
let CPM2
let CPM2Max
let CPC2
let CPC2Max
let CNV
let CNVMax

const logger = (industry) => {

    globalIndustry = industry.industry

    CPM = industry.benchmarks.CPM
    CPMMax = industry.benchmarks.CPMMax
    CPC = industry.benchmarks.CPC
    CPCMax = industry.benchmarks.CPCMax
    CTR = industry.benchmarks.CTR
    CTRMax = industry.benchmarks.CTRMax
    CPM2 = industry.benchmarks.CPM2
    CPM2Max = industry.benchmarks.CPM2Max
    CPC2 = industry.benchmarks.CPC2
    CPC2Max = industry.benchmarks.CPC2Max
    CNV = industry.benchmarks.CNV
    CNVMax = industry.benchmarks.CNVMax

    console.log(`Industry: ${industry.industry}`)
    console.log("----------------------------------------------------")
    console.log(`Cost per Thousand Impressions: $${CPM} - $${CPMMax}`)
    console.log(`Cost per Click: ${CPC}% - ${CPCMax}%`)
    console.log(`Click Thru Rate: ${CTR}% - ${CTRMax}%`)
    console.log("----------------------------------------------------")
    console.log(`Cost per Thousand Impressions: $${CPM2} - $${CPM2Max}`)
    console.log(`Cost per Click: ${CPC2}% - ${CPC2Max}%`)
    console.log(`Cost per New Visitor: ${CNV}% - ${CNVMax}%`)
    console.log("----------------------------------------------------")

}

const generateHTML = () => {

    const previous = document.querySelector(".generated")

    previous.innerHTML = `<div class="columns">
    <div class="column is-full mt-3 ml-3">
      <div
        class="is-justify-content-space-between is-align-items-center is-flex-direction-row"
      >
        <span class="is-size-2 has-text-weight-bold">Calculating Ad Budget</span>

        <div>
            <progress class="progress is-success mt-3 mb-3 is-medium" value="2" max="5">50%</progress>
        </div>
        <span class="mr-5 btn-right-2 mt-3">
          <a href="#" class="back has-text-white" onclick="back()"
            > <i class="fas fa-arrow-left"></i> Back</a
          >
        </span>
      </div>
    </div>
  </div>
    <div class="is-size-4 has-text-centered has-text-grey-light mb-4 has-text-weight-bold ">How many orders* does your website get per month?
    </div>
    <div class="columns is-centered mt-3">
      <div class="column is-3">
        <div class="control">
            <input class="input is-hovered is-half" type="number" placeholder="0">
        </div>
      </div>
      
    </div>
    <div class="columns mt-5 mb-5">
            <div class="column is-2" onclick="generateHTML2()">
              <p class="notification next has-text-centered">Next <i class="fas fa-arrow-right"></i></p>
            </div>
          </div>`


}

const generateHTML2 = () => {

    const previous = document.querySelector(".generated")
    document.querySelector(".input").defaultValue = 0
    orders = document.querySelector(".input").value

    console.log(`Orders: ${orders}`)

    previous.innerHTML = `<div class="columns">
    <div class="column is-full mt-3 ml-3">
      <div
        class="is-justify-content-space-between is-align-items-center is-flex-direction-row"
      >
        <span class="is-size-2 has-text-weight-bold">Calculating Ad Budget</span>

        <div>
            <progress class="progress is-success mt-3 mb-3 is-medium" value="3" max="5">50%</progress>
        </div>
        <span class="mr-5 btn-right-2 mt-3">
          <a href="#" class="back has-text-white" onclick="back2()"
            > <i class="fas fa-arrow-left"></i> Back</a
          >
        </span>
      </div>
    </div>
  </div>
    <div class="is-size-4 has-text-centered has-text-grey-light mb-4 has-text-weight-bold ">What is the average value of an order?
    </div>
    <div class="columns is-centered mt-3">
      <div class="column is-3">
        <div class="control">
            <input class="input is-hovered is-half" type="number" placeholder="0">
        </div>
      </div>
      
    </div>
    <div class="columns mt-5 mb-5">
            <div class="column is-2" onclick="generateHTML3()">
              <p class="notification next has-text-centered">Next <i class="fas fa-arrow-right"></i></p>
            </div>
          </div>`

}

const generateHTML3 = () => {
    const previous = document.querySelector(".generated")
    document.querySelector(".input").defaultValue = 0
    averageVal = document.querySelector(".input").value
    console.log(`Average Value: ${averageVal}`)

    previous.innerHTML = `<div class="columns">
    <div class="column is-full mt-3 ml-3">
      <div
        class="is-justify-content-space-between is-align-items-center is-flex-direction-row"
      >
        <span class="is-size-2 has-text-weight-bold">Calculating Ad Budget</span>

        <div>
            <progress class="progress is-success mt-3 mb-3 is-medium" value="4" max="5">50%</progress>
        </div>
        <span class="mr-5 btn-right-2 mt-3">
          <a href="#" class="back has-text-white" onclick="back3()"
            > <i class="fas fa-arrow-left"></i> Back</a
          >
        </span>
      </div>
    </div>
  </div>
    <div class="is-size-4 has-text-centered has-text-grey-light mb-4 has-text-weight-bold ">How many website visitors do you have a month?
    </div>
    <div class="columns is-centered mt-3">
      <div class="column is-3">
        <div class="control">
            <input class="input is-hovered is-half" type="number" placeholder="0">
        </div>
      </div>
      
    </div>
    <div class="columns mt-5 mb-5">
            <div class="column is-2" onclick="generateHTML4()">
              <p class="notification next has-text-centered">Calculate <i class="fas fa-arrow-right"></i></p>
            </div>
          </div>`
}

const generateHTML4 = () => {
    const previous = document.querySelector(".generated")
    document.querySelector(".input").defaultValue = 0
    visitors = document.querySelector(".input").value
    console.log(`Visitors: ${visitors}`)

    previous.innerHTML = `<div class="columns">
    <div class="column is-full mt-3 ml-3">
      <div
        class=" has-text-centered is-justify-content-space-between is-align-items-center is-flex-direction-row"
      >
        <span class="is-size-4 has-text-weight-bold mt-4">Based on estimated figures from <span class="has-text-weight-bolder spancolor">${globalIndustry}</span> companies, we recommend:</span>

        <div>
            <div class="columns is-centered mt-3">
                <div class="column is-3"><span class="is-size-1 has-text-weight-bolder"> <span class="has-text-weight-bolder spancolor">$</span>50 </span> </div>
            </div>
        </div>
      </div>
    </div>
  </div>
    <div class="columns mt-5 mb-5">
            <div class="column is-half">
            <table class="table is-bordered is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th class="has-text-white is-size-4">Industry Benchmarks</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cost per Thousand Impressions (CPM)</td>
          <td>$${CPM} - $${CPMMax}</td>
        </tr>
        <tr>
          <td>Cost per Click (CPC)</td>
          <td>$${CPC} - $${CPCMax}</td>
        </tr>
        <tr>
          <td>Click Thru Rate (CTR)</td>
          <td>${CTR}% - ${CTRMax}%</td>
        </tr>
      </tbody>
    </table>
            </div>

            <div class="column is-half">
            <table class="table is-bordered is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th class="has-text-white is-size-4">Industry Benchmarks</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cost per Thousand Impressions (CPM)</td>
          <td>$${CPM2} - $${CPM2Max}</td>
        </tr>
        <tr>
          <td>Cost per Click (CPC)</td>
          <td>$${CPC2} - $${CPC2Max}</td>
        </tr>
        <tr>
          <td>Cost per New Visitor</td>
          <td>$${CNV} - $${CNVMax}</td>
        </tr>
      </tbody>
    </table>
            </div>
            </div>
            <div class="columns mt-5 mb-5>
            <div class="column is-3" onclick="back()">
            <span class="mr-5 btn-right-2 mt-3">
            <a href="#" class="back has-text-white" onclick="back()"
              > <i class="fas fa-arrow-left"></i> Back</a
            >
          </span>
            </div>
          </div>`
}

const back = () => {
    const previous = document.querySelector(".generated")

    previous.innerHTML = `<div class="columns">
    <div class="column is-full mt-3 ml-3">
      <div
        class="is-justify-content-space-between is-align-items-center is-flex-direction-row"
      >
        <span class="is-size-2 has-text-weight-bold">Calculating Ad Budget</span>

        <div>
            <progress class="progress is-success mt-3 mb-3 is-medium" value="1" max="5">50%</progress>
        </div>
        
      </div>
    </div>
  </div>
      
      <div class="is-size-4 has-text-centered has-text-grey-light has-text-weight-bold ">What is your industry?</div>
      <div class="columns mt-5">
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-1" onclick="logger(artsEnt)" />
              Arts & Entertainment
            </p></label
          >
        </div>
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(autoSports)"/>
              Automotive & Sports
            </p></label
          >
        </div>
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(businessCar)"/>
              Business & <br />
              Careers
            </p></label
          >
        </div>
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(famParentingSoc)"/>
              Family, Parenting & Society
            </p></label
          >
        </div>
      </div>
      <div class="columns mt-5">
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-1" onclick="logger(healthFitnessFood)"/>
              Health Fitness & Food
            </p></label
          >
        </div>
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(homeGardenPetsHobbies)"/>
              Home/Garden, Pets & Hobbies
            </p></label
          >
        </div>
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(newsPoliticsLaw)"/>
              News, Politics & Law
            </p></label
          >
        </div>
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(personalFinance)"/>
              Personal Finance
            </p></label
          >
        </div>
      </div>
      <div class="columns mt-5">
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-1" onclick="logger(realEstate)"/>
              Real Estate
            </p></label
          >
        </div>
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(retail)"/>
              Retail
            </p></label
          >
        </div>
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(styleFashion)"/>
              Style & Fashion
            </p></label
          >
        </div>
        <div class="column">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(techComputing)"/>
              Tech & Computing
            </p></label
          >
        </div>
      </div>
      <div class="columns mt-5">
        <div class="column is-3">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-1" onclick="logger(travel)"/>
              Travel
            </p></label
          >
        </div>
        <div class="column is-3">
          <label
            ><p class="notification industry has-text-centered has-text-grey-lighter">
              <input type="radio" name="choices" value="artsEnt" class="mr-2" onclick="logger(other)"/>
              Other
            </p></label
          >
        </div>
      </div>
  </div>
  <div class="columns mt-5 mb-5">
    <div class="column is-2" onclick="generateHTML()">
      <p class="notification next has-text-centered">Next <i class="fas fa-arrow-right"></i></p>
    </div>
  </div>`
}

const back2 = () => {
    const previous = document.querySelector(".generated")
    

    previous.innerHTML = `<div class="columns">
    <div class="column is-full mt-3 ml-3">
      <div
        class="is-justify-content-space-between is-align-items-center is-flex-direction-row"
      >
        <span class="is-size-2 has-text-weight-bold">Calculating Ad Budget</span>

        <div>
            <progress class="progress is-success mt-3 mb-3 is-medium" value="2" max="5">50%</progress>
        </div>
        <span class="mr-5 btn-right-2 mt-3">
          <a href="#" class="back has-text-white" onclick="back()"
            > <i class="fas fa-arrow-left"></i> Back</a
          >
        </span>
      </div>
    </div>
  </div>
    <div class="is-size-4 has-text-centered has-text-grey-light mb-4 has-text-weight-bold ">How many orders* does your website get per month?
    </div>
    <div class="columns is-centered mt-3">
      <div class="column is-3">
        <div class="control">
            <input class="input is-hovered is-half" type="number" placeholder="0">
        </div>
      </div>
      
    </div>
    <div class="columns mt-5 mb-5">
            <div class="column is-2" onclick="generateHTML2()">
              <p class="notification next has-text-centered">Next <i class="fas fa-arrow-right"></i></p>
            </div>
          </div>`
}

const back3 = () => {
    const previous = document.querySelector(".generated")

    previous.innerHTML = `<div class="columns">
    <div class="column is-full mt-3 ml-3">
      <div
        class="is-justify-content-space-between is-align-items-center is-flex-direction-row"
      >
        <span class="is-size-2 has-text-weight-bold">Calculating Ad Budget</span>

        <div>
            <progress class="progress is-success mt-3 mb-3 is-medium" value="3" max="5">50%</progress>
        </div>
        <span class="mr-5 btn-right-2 mt-3">
          <a href="#" class="back has-text-white" onclick="back2()"
            > <i class="fas fa-arrow-left"></i> Back</a
          >
        </span>
      </div>
    </div>
  </div>
    <div class="is-size-4 has-text-centered has-text-grey-light mb-4 has-text-weight-bold ">What is the average value of an order?
    </div>
    <div class="columns is-centered mt-3">
      <div class="column is-3">
        <div class="control">
            <input class="input is-hovered is-half" type="number" placeholder="0">
        </div>
      </div>
      
    </div>
    <div class="columns mt-5 mb-5">
            <div class="column is-2" onclick="generateHTML3()">
              <p class="notification next has-text-centered">Next <i class="fas fa-arrow-right"></i></p>
            </div>
          </div>`

}