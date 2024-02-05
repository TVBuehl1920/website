import React, { useState, useMemo } from "react"

const daysOfWeek = [
  "Alle",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
]

// Hilfsfunktion zum Umwandeln einer Uhrzeit in einen vergleichbaren Wert
const timeToValue = timeStr => {
  const [hours, minutes] = timeStr.split("-")[0].trim().split(":")
  return parseInt(hours, 10) * 60 + parseInt(minutes, 10)
}

function TrainingTable({ trainingszeiten }) {
  console.log("trainingszeiten ", trainingszeiten)
  const [selectedDay, setSelectedDay] = useState("Alle")

  const filteredAndSortedTrainingszeiten = useMemo(() => {
    let filteredData = trainingszeiten

    if (selectedDay !== "Alle") {
      filteredData = filteredData.filter(item => item.node.day === selectedDay)
    }

    return filteredData.sort((a, b) => {
      const dayComparison =
        daysOfWeek.indexOf(a.node.day) - daysOfWeek.indexOf(b.node.day)
      if (dayComparison !== 0) {
        return dayComparison
      }
      return timeToValue(a.node.time) - timeToValue(b.node.time)
    })
  }, [trainingszeiten, selectedDay])

  return (
    <div className=" bg-white rounded shadow-sm ">
      <div className="mb-6 lg:mb-8 max-w-xs">
        <label className="text-sm text-gray-700" htmlFor="dayFilter">
          Filtern nach Tag:
        </label>
        <select
          id="dayFilter"
          className="form-select mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={selectedDay}
          onChange={e => setSelectedDay(e.target.value)}
        >
          {daysOfWeek.map(day => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tag
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Uhrzeit
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Gruppe
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Übungsleiter/-innen
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedTrainingszeiten.map((item, index) => (
              <tr key={index} className={index % 2 ? "bg-white" : "bg-gray-50"}>

                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {item.node.day}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {item.node.time} Uhr
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {item.node.group}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 text-sm">
                  {item.node.trainer}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TrainingTable
