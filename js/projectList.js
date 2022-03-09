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
    name: 'Muilti-Post Stories Gain',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
  {
    id: 3,
    name: 'Muilti-Post Stories Gain+Glory3',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
  {
    id: 4,
    name: 'Muilti-Post Stories Gain+Glory4',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
  {
    id: 5,
    name: 'Muilti-Post Stories Gain+Glory5',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
  {
    id: 6,
    name: 'Muilti-Post Stories Gain+Glory6',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero obcaecati officiis labore numquam animi. Mollitia unde totam nemo quas voluptatibus? Eius praesentium repudiandae quo sapiente tempora at adipisci quibusdam sint.',
    featured_image: 'placeholder.png',
    technoligies: ['Ruby on rails', 'css', 'javascript', 'html'],
    live_version: '#',
    source_link: '#',
  },
];

const gridContainer = document.querySelector('.grid-container');
const projectDetails = document.querySelector('#project_details');
const wrapperContainer = document.querySelector('.wrapper-container');

const projectList = projects.map((element) => `<div class="container">
<div class="card">
   <img src="./assets/images/${element.featured_image}" alt="${element.name}" >
   <div class="desc">
       <h4>${element.name}</h4>
       <ul>
          ${element.technoligies.map((technology) => `<li>${technology}</li>`).join('')}
       </ul>
   </div>
   <button type="button" class="see_projects" id="${element.name}" onclick="showModal(${element.id})" >See Project</button>
</div>
</div>`).join('');

gridContainer.innerHTML += projectList;

const modalContent = (project) => {
  const template = document.createElement('template');
  template.innerHTML = `
<button class="close-modal" onclick="hidePopup(${project.id})"><i class="fa-solid fa-x "></i></button>
<img class="mobile_image" src="./assets/images/snapShot.png">
<img class="deskt_image" src="./assets/images/snapshot_desk.png">
<h2>${project.name}</h2>
<ul>
    <li>Ruby on rails</li>
    <li>css</li>
    <li>Javascript</li>
</ul>
<p>${project.description}</p>
<button class="btn btn-1">see live <i class="fa-solid fa-up-right-from-square"><a href="${project.live_version}"></a></i></button>
<button class="btn btn-2" >see source <i class="fa-brands fa-github"><a href="${project.source_link}"></a></i></button>
`;
  projectDetails.appendChild(template.content);
  wrapperContainer.classList.add('show-modal');
};

/* eslint-disable no-unused-vars */
const showModal = (pid) => {
  projects.find((item) => {
    if (Number(pid) === Number(item.id)) {
      return modalContent(item);
    }
    return undefined;
  });
};

function hidePopup() {
  projectDetails.innerHTML = '';
  wrapperContainer.classList.remove('show-modal');
  // window.scrollTo(0, 0);
}
/* eslint-disable no-unused-vars */
