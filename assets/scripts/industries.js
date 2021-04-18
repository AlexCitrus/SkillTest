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


const logger = (industry) => {


    let CPM = industry.benchmarks.CPM
    let CPMMax = industry.benchmarks.CPMMax
    let CPC = industry.benchmarks.CPC
    let CPCMax = industry.benchmarks.CPCMax
    let CTR = industry.benchmarks.CTR
    let CTRMax = industry.benchmarks.CTRMax
    let CPM2 = industry.benchmarks.CPM2
    let CPM2Max = industry.benchmarks.CPM2Max
    let CPC2 = industry.benchmarks.CPC2
    let CPC2Max = industry.benchmarks.CPC2Max
    let CNV = industry.benchmarks.CNV
    let CNVMax = industry.benchmarks.CNVMax

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
