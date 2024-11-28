import axios from "axios";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const UI = () => {
  const [activeCard, setActiveCard] = useState("auto");

  const cardStyles = {
    active:
      "rounded-lg shadow-lg w-72 backdrop-blur-sm bg-blue-600/80 text-white p-2 cursor-pointer transition-all duration-300",
    inactive:
      "rounded-lg shadow-lg w-72 backdrop-blur-sm bg-black/30 text-gray-400 p-2 cursor-pointer transition-all duration-300 hover:bg-black/40",
  };

  const [totalBudget, setTotalBudget] = useState();
  const [availableBudget, setAvailableBudget] = useState();
  const [deployedBudget, setDeployedBudget] = useState();

  const [selectedOption, setSelectedOption] = useState("pillars");
  const [result, setResult] = useState();
  const [driValues, setDriValues] = useState({
    budgetWeightedScenario: {
      QTF: 0,
      RF: 0,
    },
    equalWeighingScenario: {
      QTF: 0,
      RF: 0,
    },
  });

  useEffect(() => {
    if (totalBudget) {
      const budgetValue = parseFloat(totalBudget);
      if (selectedOption === "pillars") {
        setResult(budgetValue / 4);
        console.log(budgetValue / 4);
      } else if (selectedOption === "indicators") {
        setResult(budgetValue / 10);
        console.log(budgetValue / 10);
      }
    } else {
      setResult("");
    }
  }, [totalBudget, selectedOption, result]);

  const handleCalculateDriForAutoAllocation = async () => {
    const budgetValue = parseFloat(totalBudget);

    if (selectedOption === "pillars") {
      let budgetDivide = budgetValue / 4;

      console.log("Budget - ", budgetDivide);

      const pillars = [
        {
          _id: "672ae1ebfdb7dc0ddfd84fb1",
          country: "672adf9efdb7dc0ddfd81eef",
          name: "Infrastructure & Delivery Logistics",
          year: 2024,
          __v: 2,
          createdAt: "2024-11-06T03:26:35.513Z",
          currentBudget: 146,
          hidden: false,
          indicators: [
            {
              _id: "672ae1ebfdb7dc0ddfd84fbc",
              name: "Quality of electricity supply index (WEF, 2017)",
              pillar: "672ae1ebfdb7dc0ddfd84fb1",
              __v: 0,
              additionalBudget: budgetDivide / 2,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.518Z",
              hidden: false,
              indicatorValue: 5.8,
              sourceLink: "World Economic Forum",
              sourceYear: 2017,
              updatedAt: "2024-11-06T10:39:13.842Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd84fd1",
              name: "Percentage of population having reliable internet access",
              pillar: "672ae1ebfdb7dc0ddfd84fb1",
              __v: 0,
              additionalBudget: budgetDivide / 2,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.527Z",
              hidden: false,
              indicatorValue: 58,
              sourceLink: "National Bureau of Statistics",
              sourceYear: 2017,
              updatedAt: "2024-11-06T10:39:13.847Z",
              year: [2024],
            },
          ],
          updatedAt: "2024-11-06T10:39:13.837Z",
        },
        {
          _id: "672ae1ebfdb7dc0ddfd84fe6",
          country: "672adf9efdb7dc0ddfd81eef",
          name: "Human Capacity",
          year: 2024,
          __v: 3,
          createdAt: "2024-11-06T03:26:35.536Z",
          currentBudget: 1058.5,
          hidden: false,
          indicators: [
            {
              _id: "672ae1ebfdb7dc0ddfd84ff1",
              name: "Percentage of teachers that are professionally qualified to teach",
              pillar: "672ae1ebfdb7dc0ddfd84fe6",
              __v: 0,
              additionalBudget: budgetDivide / 3,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.540Z",
              hidden: false,
              indicatorValue: 100,
              sourceLink: "Authors’ own computation",
              updatedAt: "2024-11-06T10:39:13.857Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd85006",
              name: "Percentage of colleges/universities offering ICT courses for pre-service teachers",
              pillar: "672ae1ebfdb7dc0ddfd84fe6",
              __v: 0,
              additionalBudget: budgetDivide / 3,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.550Z",
              hidden: false,
              indicatorValue: 100,
              sourceLink: "Authors’ own computation",
              updatedAt: "2024-11-06T10:39:13.861Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd8501b",
              name: "Percentage of in-service teachers trained in integrating ICT in teaching",
              pillar: "672ae1ebfdb7dc0ddfd84fe6",
              __v: 0,
              additionalBudget: budgetDivide / 3,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.559Z",
              hidden: false,
              indicatorValue: 8.9,
              sourceLink:
                "Authors’ own computation based on assessment of the Education Flagship Program",
              sourceYear: 2021,
              updatedAt: "2024-11-06T10:39:13.867Z",
              year: [2024],
            },
          ],
          updatedAt: "2024-11-06T10:39:13.852Z",
        },
        {
          _id: "672ae1ebfdb7dc0ddfd8502f",
          country: "672adf9efdb7dc0ddfd81eef",
          name: "Content",
          year: 2024,
          __v: 2,
          createdAt: "2024-11-06T03:26:35.567Z",
          currentBudget: 277.7,
          hidden: false,
          indicators: [
            {
              _id: "672ae1ebfdb7dc0ddfd8503b",
              name: "Percentage of content available in multi-modal formats in core subjects (STEM & Social Sciences)",
              pillar: "672ae1ebfdb7dc0ddfd8502f",
              __v: 0,
              additionalBudget: budgetDivide / 2,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.573Z",
              hidden: false,
              indicatorValue: 25,
              sourceLink:
                "Authors’ own computation based on assessment of the Education Flagship Program",
              sourceYear: 2021,
              updatedAt: "2024-11-06T10:39:13.875Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd85050",
              name: "Percentage of  digital content that is available in official national language(s)",
              pillar: "672ae1ebfdb7dc0ddfd8502f",
              __v: 0,
              additionalBudget: budgetDivide / 2,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.581Z",
              hidden: false,
              indicatorValue: 50,
              sourceLink:
                "Authors’ own computation based on assessment of the Education Flagship Program",
              sourceYear: 2021,
              updatedAt: "2024-11-06T10:39:13.880Z",
              year: [2024],
            },
          ],
          updatedAt: "2024-11-06T10:39:13.871Z",
        },
        {
          _id: "672ae1ebfdb7dc0ddfd85065",
          country: "672adf9efdb7dc0ddfd81eef",
          name: "School",
          year: 2024,
          __v: 3,
          createdAt: "2024-11-06T03:26:35.589Z",
          currentBudget: 887.58,
          hidden: false,
          indicators: [
            {
              _id: "672ae1ebfdb7dc0ddfd85070",
              name: "Number of computers available per 100 students in schools",
              pillar: "672ae1ebfdb7dc0ddfd85065",
              __v: 0,
              additionalBudget: budgetDivide / 3,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.594Z",
              hidden: false,
              indicatorValue: 4.34,
              sourceLink: "MoE",
              sourceYear: 2019,
              updatedAt: "2024-11-06T10:39:13.889Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd85085",
              name: "Percentage of schools with internet connectivity",
              pillar: "672ae1ebfdb7dc0ddfd85065",
              __v: 0,
              additionalBudget: budgetDivide / 3,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.602Z",
              hidden: false,
              indicatorValue: 62,
              sourceLink: "MoE",
              sourceYear: 2019,
              updatedAt: "2024-11-06T10:39:13.893Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd8509a",
              name: "Percentage of schools having a mental health counselor/psychologist",
              pillar: "672ae1ebfdb7dc0ddfd85065",
              __v: 0,
              additionalBudget: budgetDivide / 3,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.611Z",
              hidden: false,
              indicatorValue: 15.06,
              sourceLink: "MoE",
              sourceYear: 2020,
              updatedAt: "2024-11-06T10:39:13.898Z",
              year: [2024],
            },
          ],
          updatedAt: "2024-11-06T10:39:13.884Z",
        },
      ];

      // 20 30 20 30

      const res = await axios.post(
        "http://localhost:8080/api/v1/user/calculate-dri",
        {
          pillars: pillars,
        }
      );

      console.log(res.data);
      setDriValues(res.data.dri);
    } else if (selectedOption === "indicators") {
      let budgetDivide = budgetValue;
      console.log();
      console.log("Budget - ", budgetDivide);

      const pillars = [
        {
          _id: "672ae1ebfdb7dc0ddfd84fb1",
          country: "672adf9efdb7dc0ddfd81eef",
          name: "Infrastructure & Delivery Logistics",
          year: 2024,
          __v: 2,
          createdAt: "2024-11-06T03:26:35.513Z",
          currentBudget: 146,
          hidden: false,
          indicators: [
            {
              _id: "672ae1ebfdb7dc0ddfd84fbc",
              name: "Quality of electricity supply index (WEF, 2017)",
              pillar: "672ae1ebfdb7dc0ddfd84fb1",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.518Z",
              hidden: false,
              indicatorValue: 5.8,
              sourceLink: "World Economic Forum",
              sourceYear: 2017,
              updatedAt: "2024-11-06T10:39:13.842Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd84fd1",
              name: "Percentage of population having reliable internet access",
              pillar: "672ae1ebfdb7dc0ddfd84fb1",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.527Z",
              hidden: false,
              indicatorValue: 58,
              sourceLink: "National Bureau of Statistics",
              sourceYear: 2017,
              updatedAt: "2024-11-06T10:39:13.847Z",
              year: [2024],
            },
          ],
          updatedAt: "2024-11-06T10:39:13.837Z",
        },
        {
          _id: "672ae1ebfdb7dc0ddfd84fe6",
          country: "672adf9efdb7dc0ddfd81eef",
          name: "Human Capacity",
          year: 2024,
          __v: 3,
          createdAt: "2024-11-06T03:26:35.536Z",
          currentBudget: 1058.5,
          hidden: false,
          indicators: [
            {
              _id: "672ae1ebfdb7dc0ddfd84ff1",
              name: "Percentage of teachers that are professionally qualified to teach",
              pillar: "672ae1ebfdb7dc0ddfd84fe6",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.540Z",
              hidden: false,
              indicatorValue: 100,
              sourceLink: "Authors’ own computation",
              updatedAt: "2024-11-06T10:39:13.857Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd85006",
              name: "Percentage of colleges/universities offering ICT courses for pre-service teachers",
              pillar: "672ae1ebfdb7dc0ddfd84fe6",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.550Z",
              hidden: false,
              indicatorValue: 100,
              sourceLink: "Authors’ own computation",
              updatedAt: "2024-11-06T10:39:13.861Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd8501b",
              name: "Percentage of in-service teachers trained in integrating ICT in teaching",
              pillar: "672ae1ebfdb7dc0ddfd84fe6",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.559Z",
              hidden: false,
              indicatorValue: 8.9,
              sourceLink:
                "Authors’ own computation based on assessment of the Education Flagship Program",
              sourceYear: 2021,
              updatedAt: "2024-11-06T10:39:13.867Z",
              year: [2024],
            },
          ],
          updatedAt: "2024-11-06T10:39:13.852Z",
        },
        {
          _id: "672ae1ebfdb7dc0ddfd8502f",
          country: "672adf9efdb7dc0ddfd81eef",
          name: "Content",
          year: 2024,
          __v: 2,
          createdAt: "2024-11-06T03:26:35.567Z",
          currentBudget: 277.7,
          hidden: false,
          indicators: [
            {
              _id: "672ae1ebfdb7dc0ddfd8503b",
              name: "Percentage of content available in multi-modal formats in core subjects (STEM & Social Sciences)",
              pillar: "672ae1ebfdb7dc0ddfd8502f",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.573Z",
              hidden: false,
              indicatorValue: 25,
              sourceLink:
                "Authors’ own computation based on assessment of the Education Flagship Program",
              sourceYear: 2021,
              updatedAt: "2024-11-06T10:39:13.875Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd85050",
              name: "Percentage of  digital content that is available in official national language(s)",
              pillar: "672ae1ebfdb7dc0ddfd8502f",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.581Z",
              hidden: false,
              indicatorValue: 50,
              sourceLink:
                "Authors’ own computation based on assessment of the Education Flagship Program",
              sourceYear: 2021,
              updatedAt: "2024-11-06T10:39:13.880Z",
              year: [2024],
            },
          ],
          updatedAt: "2024-11-06T10:39:13.871Z",
        },
        {
          _id: "672ae1ebfdb7dc0ddfd85065",
          country: "672adf9efdb7dc0ddfd81eef",
          name: "School",
          year: 2024,
          __v: 3,
          createdAt: "2024-11-06T03:26:35.589Z",
          currentBudget: 887.58,
          hidden: false,
          indicators: [
            {
              _id: "672ae1ebfdb7dc0ddfd85070",
              name: "Number of computers available per 100 students in schools",
              pillar: "672ae1ebfdb7dc0ddfd85065",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.594Z",
              hidden: false,
              indicatorValue: 4.34,
              sourceLink: "MoE",
              sourceYear: 2019,
              updatedAt: "2024-11-06T10:39:13.889Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd85085",
              name: "Percentage of schools with internet connectivity",
              pillar: "672ae1ebfdb7dc0ddfd85065",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.602Z",
              hidden: false,
              indicatorValue: 62,
              sourceLink: "MoE",
              sourceYear: 2019,
              updatedAt: "2024-11-06T10:39:13.893Z",
              year: [2024],
            },
            {
              _id: "672ae1ebfdb7dc0ddfd8509a",
              name: "Percentage of schools having a mental health counselor/psychologist",
              pillar: "672ae1ebfdb7dc0ddfd85065",
              __v: 0,
              additionalBudget: budgetDivide / 10,
              country: "672adf9efdb7dc0ddfd81eef",
              createdAt: "2024-11-06T03:26:35.611Z",
              hidden: false,
              indicatorValue: 15.06,
              sourceLink: "MoE",
              sourceYear: 2020,
              updatedAt: "2024-11-06T10:39:13.898Z",
              year: [2024],
            },
          ],
          updatedAt: "2024-11-06T10:39:13.884Z",
        },
      ];

      // 20 30 20 30

      const res = await axios.post(
        "http://localhost:8080/api/v1/user/calculate-dri",
        {
          pillars: pillars,
        }
      );

      console.log(res.data);
      setDriValues(res.data.dri);
    }
  };

  return (
    <div className="z-20 absolute w-full mx-auto">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-72 ${
          activeCard === "auto" ? cardStyles.active : cardStyles.inactive
        } absolute left-4 top-2`}
        onClick={() => setActiveCard("auto")}
      >
        <div className="px-4 pt-4 pb-4 border-b border-gray-500/30">
          <h2 className="text-xl font-semibold tracking-normal">
            Auto Equal Allocation
          </h2>
          {/* <small>
            Automatically divides the total budget into equal parts.
          </small> */}
        </div>
        {/* Radio Buttons for Pillars and Indicators */}
        <div className="flex flex-col justify-center pl-4 ">
          <label className="mb-2">
            <input
              type="radio"
              value="pillars"
              checked={selectedOption === "pillars"}
              onChange={() => setSelectedOption("pillars")}
              disabled={activeCard === "manual"}
            />
            Pillars
          </label>
          <label>
            <input
              type="radio"
              value="indicators"
              checked={selectedOption === "indicators"}
              onChange={() => setSelectedOption("indicators")}
              disabled={activeCard === "manual"}
            />
            Indicators
          </label>
        </div>
        <div className="p-4 space-y-3 ">
          <input
            type="number"
            step="any"
            placeholder="Total Budget"
            className={`border-2 text-black border-neutral-400 w-full bg-white h-10 px-4 rounded-lg text-sm focus:outline-none ${
              activeCard === "manual" ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={activeCard === "manual"}
            value={totalBudget}
            onChange={(e) => setTotalBudget(e.target.value)}
          />
          <div className="mt-2 text-sm">
            {activeCard === "auto" ? "✓ Currently Active" : "Click to activate"}
          </div>
          {totalBudget &&
            `${selectedOption} divided into ${
              selectedOption === "pillars" ? "4" : "10"
            } parts and here is each ${selectedOption.slice(0, -1)} ${result}`}
          <button
            className={`bg-white ${
              activeCard === "manual"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-blue-500"
            } text-blue-500 ${
              activeCard === "manual" ? "text-gray-500" : "hover:text-white"
            } font-bold py-2 px-4 rounded`}
            onClick={handleCalculateDriForAutoAllocation}
            disabled={activeCard === "manual"}
          >
            Calculate DRI
          </button>

          <div className="mt-4">
            <p>Calculated DRI Values:</p>
            <div>
              <strong>Budget Weighted Scenario:</strong>
              <ul>
                <li>RF: {driValues.budgetWeightedScenario.RF?.toFixed(4)}</li>
              </ul>
            </div>
            <div>
              <strong>Equal Weighing Scenario:</strong>
              <ul>
                <li>RF: {driValues.equalWeighingScenario.RF?.toFixed(4)}</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-72 ${
          activeCard === "manual" ? cardStyles.active : cardStyles.inactive
        } absolute right-4 top-2`}
        onClick={() => setActiveCard("manual")}
      >
        <div className="p-4 border-b border-gray-500/30">
          <h2 className="text-xl font-semibold">Manual Allocation</h2>
        </div>
        <div className="p-4">
          {/* Input Box for Available Budget */}
          <input
            type="number"
            step="any"
            placeholder="Available Budget"
            className="border-2 text-black border-neutral-400 w-full bg-white h-10 px-4 rounded-lg text-sm focus:outline-none"
            value={availableBudget}
            onChange={(e) => setAvailableBudget(e.target.value)}
          />
          {/* Input Box for Deployed Budget */}
          <input
            type="number"
            step="any"
            placeholder="Deployed Budget"
            className="border-2 text-black border-neutral-400 w-full bg-white h-10 px-4 rounded-lg text-sm focus:outline-none mt-4"
            value={deployedBudget}
            onChange={(e) => setDeployedBudget(e.target.value)}
          />
          <div className="mt-2 text-sm">
            {activeCard === "manual"
              ? "✓ Currently Active"
              : "Click to activate"}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UI;
