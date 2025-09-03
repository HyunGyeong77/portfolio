import {text} from '../texts/projectTxt.js';

export default function projectComponents() {
    pages();
}

function pages() {
    const wrap = document.querySelector(".projects_wrap");
    const sticky = document.querySelector(".projects_sticky");

    wrap.style.height = `${(120 * (Object.keys(text).length))}vh`;

    Object.values(text).forEach((item, index) => {
        const title_p = document.createElement("p");
        title_p.innerText = item.title;

        const type_p = document.createElement("p");
        type_p.innerText = item.type;

        const githubPage_a = document.createElement("a");
        githubPage_a.href = item.githubPage;
        githubPage_a.innerText = "View Project";
        githubPage_a.target = "_blank";
        githubPage_a.rel = "noopener noreferrer";

        const github_a = document.createElement("a");
        github_a.href = item.github;
        github_a.innerText = "Code Review";
        github_a.target = "_blank";
        github_a.rel = "noopener noreferrer";

        if(index !== 0) {
            githubPage_a.onfocus = () => {
                const beforeProject = window.innerHeight * 2;

                window.scrollTo({
                    top: beforeProject + ((window.innerHeight * 1.25) * index)
                });
            }
        }

        const githubPage_li = document.createElement("li");
        const github_li = document.createElement("li");
        githubPage_li.appendChild(githubPage_a);
        github_li.appendChild(github_a);

        const githubSites_ul = document.createElement("ul");
        githubSites_ul.append(githubPage_li, github_li);

        const language_ul = document.createElement("ul");

        item.language.map((item) => {
            const language_p = document.createElement("p");
            language_p.innerText = item;

            const language_li = document.createElement("li");
            language_li.appendChild(language_p);

            language_ul.appendChild(language_li);
        });


        const content_ul = document.createElement("ul");

        item.content.map((item) => {
            const content_span = document.createElement("span");
            content_span.innerText = `#${item}`;

            const content_li = document.createElement("li");
            content_li.appendChild(content_span);

            content_ul.appendChild(content_li);
        });
        

        const page_li = document.createElement("li");
        const curPage_p = document.createElement("p");
        const totalPage_p = document.createElement("p");
        const totalPage = Object.keys(text).length;
        curPage_p.innerText = index < 10 ? `0${index + 1}` : `${index}`;
        totalPage_p.innerText = totalPage < 10 ? `0${totalPage}` : `${totalPage}`;
        page_li.append(curPage_p, totalPage_p);

        const video = document.createElement("video");
        video.src = item.video;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;

        const video_li = document.createElement("li");
        video_li.appendChild(video);

        const ul = document.createElement("ul");
        const project_li = document.createElement("li");
        ul.className = `projects_project${index}`;
        ul.id = item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase();
        ul.style.zIndex = `-${index + 1}`;
        ul.append(video_li, project_li, page_li);
        project_li.append(title_p, type_p, githubSites_ul, language_ul, content_ul);

        sticky.appendChild(ul);
    });
}