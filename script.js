const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'img/angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office manager',
        img: 'img/walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'img/scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'img/barbara-ramos-graphic-designer.jpg'
    },

]


const cardsContainer = document.querySelector('.team-container');

for (let i = 0; i < members.length; i++) {

    // creazione card
    const card = document.createElement('div');
    card.classList.add('team-card')
    cardsContainer.append(card);
    
    // creazione img container
    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card-image');
    card.append(cardImageContainer);

    cardImageContainer.innerHTML = `<img src="${members[i].img}">`
    
    // creazione text container
    const cardTextContainer = document.createElement('div');
    cardTextContainer.classList.add('card-text');
    card.append(cardTextContainer);

    cardTextContainer.innerHTML = `<h3>${members[i].name}</h3><p>${members[i].role}</p>`
    
}

const addBtn = document.querySelector('#addMemberButton');
const nameInput = document.querySelector('#name');
const roleInput = document.querySelector('#role');
const imageInput = document.querySelector('#image');

addBtn.addEventListener('click', newCard);

function newCard() {

    members.push(
        {
            name: nameInput.value,
            role: roleInput.value,
            img: imageInput.value,
        }
    )

    let lastIndex = members.length - 1;

    nameInput.value = '';
    roleInput.value = '';
    imageInput.value = '';


    // creazione card
    const card = document.createElement('div');
    card.classList.add('team-card')
    cardsContainer.append(card);
    
    // creazione img container
    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card-image');
    card.append(cardImageContainer);

    cardImageContainer.innerHTML = `<img src="${members[lastIndex].img}">`
    
    // creazione text container
    const cardTextContainer = document.createElement('div');
    cardTextContainer.classList.add('card-text');
    card.append(cardTextContainer);

    cardTextContainer.innerHTML = `<h3>${members[lastIndex].name}</h3><p>${members[lastIndex].role}</p>`



}

