const rocketUrl = "http://rocketseat.com.br/"
const asstesUrl = "https://storage.googleapis.com/golden-wind/bootcamp-launchbase/assets/"
module.exports = [
    {
        id: "starter",
        imgUrl: `${asstesUrl}starter.svg`,
        link: `${rocketUrl}starter`,
        modules: 10,
        price: "Free",
    },

    {
        id: "launchbase",
        imgUrl: `${asstesUrl}launchbase.svg`,
        link: `${rocketUrl}launchbase`,
        modules: 12,
        price: "Paid",
    },

    {
        id: "gostack",
        imgUrl: `${asstesUrl}gostack.svg`,
        link: `${rocketUrl}gostack`,
        modules: 15,
        price: "Paid",
    },
]