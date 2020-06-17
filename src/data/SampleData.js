const date = new Date()

const month = date.getMonth()

const day = date.getDate()

const SampleData = [
    {
        id: 1,
        title: 'Yoga Class',
        date: '1 day ago',
        selectedDays: [new Date(2020, month, day - 3),
            new Date(2020, month, day - 1)],
        image_path: '/react-things-happen/assets/images/yoga.png'
    },
    {
        id: 2,
        title: 'Buy Contact Lens',
        date: 'Today',
        selectedDays: [
            new Date(2020, month, day)],
        image_path: '/react-things-happen/assets/images/contact_lens.png'
    },
    {
        id: 3,
        title: 'Water Plants',
        date: '6 days ago',
        selectedDays: [new Date(2020, month, day - 7),
            new Date(2020, month, day - 6)],
        image_path: '/react-things-happen/assets/images/water_plants.png'
    },
    {
        id: 4,
        title: 'TTH Analysis',
        date: '2 days ago',
        selectedDays: [new Date(2020, month, day - 5 ),
            new Date(2020, month, day - 2)],
        image_path: '/react-things-happen/assets/images/tth_analysis.png'
    },
    {
        id: 5,
        title: 'Play Tennis',
        date: '9 days ago',
        selectedDays: [
            new Date(2020, month, day - 9)],
        image_path: '/react-things-happen/assets/images/32.png'
    },
    // {
    //     id: 6,
    //     title: 'Thyroid Diagnostic',
    //     date: '30 days ago',
    //     selectedDays: [
    //         new Date(2020, month, day - 30)],
    //     image_path: 'assets/images/30.png'
    // }
]

export default SampleData;