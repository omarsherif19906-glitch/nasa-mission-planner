const missions = [
    {
        name: "Artemis II",
        destination: "Moon",
        crew: 4,
        status: "Planned"
    },
    {
        name: "Mars Sample Return",
        destination: "Mars",
        crew: 0,
        status: "Planned"
    },
    {
        name: "International Space Station Mission",
        destination: "Low Earth Orbit",
        crew: 7,
        status: "Active"
    }
];

function filterMissions(status) {
    if (status === "All") {
        return missions;
    }

    return missions.filter(mission => mission.status === status);
}

console.log("All missions:", filterMissions("All"));
console.log("Planned missions:", filterMissions("Planned"));
