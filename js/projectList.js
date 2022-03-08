const projects = [
  {
    id: 1,
    name: 'Muilti-Post Stories Gain+Glory',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
  {
    id: 2,
    name: 'Muilti-Post Stories Gain+Glory',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
  {
    id: 3,
    name: 'Muilti-Post Stories Gain+Glory',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
  {
    id: 4,
    name: 'Muilti-Post Stories Gain+Glory',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
  {
    id: 5,
    name: 'Muilti-Post Stories Gain+Glory',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
  {
    id: 6,
    name: 'Muilti-Post Stories Gain+Glory',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
];

const gridContainer = document.querySelector('.grid-container');

const projectList = projects.map((element) => `<div class="container">
<div class="card">
   <img src="./assets/images/${element.featured_image}" alt="${element.name}" >
   <div class="desc">
       <h4>${element.name}</h4>
       <ul>
          ${element.technoligies.map((technology) => `<li>${technology}</li>`).join('')};
       </ul>
   </div>
   <button type="button">See Project</button>
</div>
</div>`).join('');

// console.log(projectList);
gridContainer.innerHTML += projectList;
