const notes = [
    {
        title: 'my next trip',
        body: "I'd like to go to vancouver",
        page: 2
    },
    {
        title: 'my favorite food',
        body: 'chicken',
        page: 1
    },
    {
        title: 'my favorite sweets',
        body: 'sweet potato',
        page: 3
    },
    {
        title: 'my favorite sweets',
        body: 'sweet potato',
        page: 4
    }
];

document.querySelector('button').addEventListener('click', (e) => {
    console.log(e.target.textContent = "the button was clicked");
})