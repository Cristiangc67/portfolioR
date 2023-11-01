import React from "react";
import { MdDownload } from "react-icons/md";
import { MdDownloadDone } from "react-icons/md";

function Home() {
  const downloadClassHandler = () => {
    let download = document.querySelector("#download");
    let done = document.querySelector("#done");

    download.classList.add("scale-x-0");
    done.classList.add("scale-x-100");

    setTimeout(() => {
      download.classList.remove("scale-x-0");
      done.classList.remove("scale-x-100");
    }, 800);
    console.log(download);
  };

  /* const cristian = () => {
    anime({
      targets: "#cristian",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 400,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true,
    });
  }; */

  return (
    <div className="flex flex-col justify-center items-center w-full  h-screen bg-[#21272F]">
      <div className=" md:flex-col-reverse xl:flex-row flex justify-around items-center ">
        <div className="flex flex-col md:text-center xl:text-start md:w-full xl:w-3/6 md:items-center xl:items-start ">
          <h1 className=" text-5xl font-jost text-white">
            Soy <br />
            <span className=" text-7xl font-jost text-violet-700 leading-relaxed font-semibold">
              Cristian Gutierrez
            </span>
          </h1>
          <h2 className=" mt-2 text-5xl font-jost text-white">
            Front-End Developer
          </h2>
          <p className="text-2xl font-lato text-slate-500 md:w-5/6 xl:w-4/5 mt-9">
            Me emociona la posibilidad de crear páginas web que impresionen a
            usuarios de todo el mundo y estoy comprometido a poner todo mi
            esfuerzo y dedicación en cada proyecto que emprendo.
          </p>

          <a
            href="src\docs\Cristian-Gutierrez-CruzCV-2023.pdf"
            download="CristianGutierrezCruzCV"
            className="group w-max mt-20"
            onClick={downloadClassHandler}
          >
            <button
              type="submit"
              className="p-5 flex bg-gradient-to-r bg-violet-900 text-4xl tracking-wide text-white rounded-2xl group-hover:bg-violet-800 drop-shadow-[0_35px_35px_rgb(109,40,217,0.25)]"
            >
              <span className="font-jost ">Descargar CV</span>
              <div className="flex relative flex-col items-center w-[50px] h-[50px]">
                <MdDownloadDone
                  id="done"
                  className="absolute scale-x-0 transition-transform duration-300"
                  size={50}
                />
                <MdDownload
                  id="download"
                  className=" absolute duration-300 transition-transform"
                  size={50}
                />
              </div>
            </button>
          </a>
        </div>
        <div className="flex justify-center w-3/12 mb-10 relative">
          {/* <svg
            id="cristian"
            className="-skew-y-12 absolute top-3/4 left-1/3 z-10 hidden xl:inline-block "
            width="345"
            height="114"
            viewBox="0 0 345 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_1_5" fill="white">
              <path d="M112.608 47.848C115.872 49.192 115.824 52.312 112.464 57.208L79.632 102.712V102.856C71.472 100.84 67.008 96.376 66.24 89.464C67.488 85.048 68.976 80.824 70.704 76.792C72.528 72.664 74.496 68.632 76.608 64.696C78.72 60.76 80.88 56.92 83.088 53.176C85.392 49.336 87.648 45.448 89.856 41.512C88.32 39.016 86.256 37.864 83.664 38.056C82.608 40.648 80.88 44.104 78.48 48.424C76.08 52.648 73.248 57.304 69.984 62.392C66.72 67.384 63.072 72.568 59.04 77.944C55.008 83.32 50.88 88.36 46.656 93.064C42.432 97.768 38.16 101.944 33.84 105.592C29.52 109.24 25.392 111.832 21.456 113.368C21.168 113.368 20.976 113.416 20.88 113.512C18.096 113.224 15.216 112.456 12.24 111.208C9.36001 109.96 6.96002 108.52 5.04001 106.888C1.68001 103.336 0.0480146 98.632 0.144015 92.776C0.240015 86.824 1.48801 80.344 3.88801 73.336C6.28801 66.232 9.55201 58.936 13.68 51.448C17.808 43.96 22.32 36.856 27.216 30.136C32.112 23.416 37.056 17.464 42.048 12.28C47.04 6.99999 51.552 3.11199 55.584 0.615997C56.448 0.711996 57.552 1.096 58.896 1.768C60.24 2.44 61.632 3.25599 63.072 4.21599C64.512 5.17599 65.856 6.23199 67.104 7.384C68.448 8.536 69.504 9.688 70.272 10.84C70.848 13.72 70.704 17.128 69.84 21.064C68.976 24.904 67.68 28.888 65.952 33.016C64.224 37.144 62.16 41.176 59.76 45.112C57.36 48.952 54.912 52.264 52.416 55.048C49.92 56.68 47.136 57.64 44.064 57.928C40.992 58.216 38.256 57.4 35.856 55.48C38.256 53.656 40.8 50.92 43.488 47.272C46.272 43.528 48.864 39.592 51.264 35.464C53.76 31.24 55.92 27.16 57.744 23.224C59.568 19.192 60.768 15.928 61.344 13.432C57.792 15.928 53.904 19.576 49.68 24.376C45.456 29.176 41.328 34.504 37.296 40.36C33.36 46.216 29.712 52.36 26.352 58.792C22.992 65.128 20.448 71.176 18.72 76.936C18.432 77.896 18.048 79.24 17.568 80.968C17.184 82.6 16.848 84.328 16.56 86.152C16.368 87.88 16.272 89.656 16.272 91.48C16.272 93.208 16.56 94.648 17.136 95.8C17.712 96.952 18.576 97.72 19.728 98.104C20.976 98.488 22.656 98.2 24.768 97.24C28.128 95.032 31.776 92.008 35.712 88.168C39.744 84.232 43.728 79.912 47.664 75.208C51.6 70.408 55.392 65.368 59.04 60.088C62.784 54.808 66.048 49.72 68.832 44.824C71.616 39.832 73.824 35.224 75.456 31C77.088 26.776 77.904 23.32 77.904 20.632H89.424C88.848 23.704 87.84 27.208 86.4 31.144V31.288C91.872 31.864 96.096 33.16 99.072 35.176C102.048 37.192 103.968 39.976 104.832 43.528C104.832 43.528 103.968 44.632 102.24 46.84C100.608 49.048 98.592 52.024 96.192 55.768C93.888 59.512 91.488 63.88 88.992 68.872C86.496 73.768 84.432 78.904 82.8 84.28L112.608 47.848Z" />
              <path d="M120.108 31.432C125.196 29.8 129.66 31.72 133.5 37.192C121.596 54.472 113.964 70.696 110.604 85.864L141.708 47.704C144.876 49.048 144.828 52.216 141.564 57.208L108.732 102.712C100.476 100.696 96.0604 96.184 95.4844 89.176C96.9244 83.896 98.5564 78.808 100.38 73.912C102.3 69.016 104.316 64.216 106.428 59.512C108.636 54.808 110.892 50.152 113.196 45.544C115.5 40.936 117.804 36.232 120.108 31.432ZM136.38 0.471999C138.492 0.0879979 140.892 0.0879979 143.58 0.471999C146.364 0.855999 148.716 1.672 150.636 2.91999L136.812 24.952C134.604 24.184 132.78 23.56 131.34 23.08C129.9 22.504 128.364 21.976 126.732 21.496L136.38 0.471999Z" />
              <path d="M158.046 56.632C157.95 55.192 158.19 52.936 158.766 49.864C159.342 46.696 160.11 43.624 161.07 40.648C159.918 39.208 157.758 39.688 154.59 42.088C150.078 45.256 147.246 49 146.094 53.32C144.942 57.544 144.846 61.864 145.806 66.28C146.766 70.6 148.446 74.776 150.846 78.808C153.342 82.84 155.934 86.248 158.622 89.032C158.142 92.68 156.894 95.512 154.878 97.528C152.958 99.544 150.558 100.984 147.678 101.848C144.798 102.712 141.63 103.096 138.174 103C134.814 102.904 131.55 102.472 128.382 101.704C126.366 100.36 125.502 98.68 125.79 96.664C126.078 94.552 127.038 91.96 128.67 88.888C131.07 91.192 133.614 92.632 136.302 93.208C139.086 93.784 142.11 93.832 145.374 93.352C143.166 89.896 141.054 86.68 139.038 83.704C137.022 80.632 135.39 77.512 134.142 74.344C132.99 71.176 132.27 67.816 131.982 64.264C131.79 60.712 132.318 56.68 133.566 52.168C134.334 49.384 135.486 46.648 137.022 43.96C138.558 41.272 140.43 38.92 142.638 36.904C144.846 34.888 147.294 33.304 149.982 32.152C152.766 31 155.694 30.472 158.766 30.568C161.166 30.76 163.038 31.528 164.382 32.872C165.246 31.816 165.918 31.432 166.398 31.72L175.47 35.608C174.414 36.568 173.358 37.96 172.302 39.784C171.246 41.512 170.19 43.432 169.134 45.544C168.174 47.56 167.214 49.576 166.254 51.592C165.39 53.608 164.622 55.336 163.95 56.776L158.046 56.632Z" />
              <path d="M199.283 0.471999C202.067 0.0879979 204.563 0.327998 206.771 1.192C208.979 2.056 211.043 3.784 212.963 6.376C211.619 8.392 210.179 10.696 208.643 13.288C207.203 15.88 205.715 18.568 204.179 21.352C204.851 21.352 205.475 21.352 206.051 21.352C206.627 21.352 207.155 21.448 207.635 21.64C208.787 22.792 209.459 24.424 209.651 26.536C208.307 26.536 206.963 26.536 205.619 26.536C204.275 26.536 202.931 26.632 201.587 26.824C199.283 31.432 196.979 36.28 194.675 41.368C192.467 46.456 190.403 51.544 188.483 56.632C186.563 61.72 184.787 66.712 183.155 71.608C181.523 76.504 180.179 81.112 179.123 85.432L209.651 48.136C213.011 49.48 212.963 52.552 209.507 57.352L176.531 103.288C172.307 102.232 169.043 100.6 166.739 98.392C164.435 96.184 163.091 93.256 162.707 89.608C163.571 86.056 164.867 81.832 166.595 76.936C168.419 72.04 170.435 66.808 172.643 61.24C174.851 55.672 177.203 49.96 179.699 44.104C182.291 38.248 184.835 32.584 187.331 27.112C186.755 27.304 186.179 27.4 185.603 27.4C185.123 27.4 184.547 27.4 183.875 27.4C183.011 26.632 182.243 25.672 181.571 24.52C180.899 23.368 180.467 22.072 180.275 20.632C181.907 20.632 183.491 20.68 185.027 20.776C186.659 20.776 188.291 20.776 189.923 20.776C191.843 16.744 193.571 13 195.107 9.54399C196.739 5.99199 198.131 2.968 199.283 0.471999Z" />
              <path d="M214.749 31.432C219.837 29.8 224.301 31.72 228.141 37.192C216.237 54.472 208.605 70.696 205.245 85.864L236.349 47.704C239.517 49.048 239.469 52.216 236.205 57.208L203.373 102.712C195.117 100.696 190.701 96.184 190.125 89.176C191.565 83.896 193.197 78.808 195.021 73.912C196.941 69.016 198.957 64.216 201.069 59.512C203.277 54.808 205.533 50.152 207.837 45.544C210.141 40.936 212.445 36.232 214.749 31.432ZM231.021 0.471999C233.133 0.0879979 235.533 0.0879979 238.221 0.471999C241.005 0.855999 243.357 1.672 245.277 2.91999L231.453 24.952C229.245 24.184 227.421 23.56 225.981 23.08C224.541 22.504 223.005 21.976 221.373 21.496L231.021 0.471999Z" />
              <path d="M288.727 47.992C291.991 49.336 291.991 52.504 288.727 57.496L255.751 103C247.495 100.984 243.031 96.52 242.359 89.608C243.031 87.4 243.703 85.192 244.375 82.984C245.047 80.776 245.767 78.616 246.535 76.504C245.191 78.712 243.655 81.16 241.927 83.848C240.391 86.152 238.567 88.936 236.455 92.2C234.343 95.368 231.895 98.968 229.111 103C220.759 100.984 216.295 96.52 215.719 89.608C217.159 84.328 218.791 79.24 220.615 74.344C222.535 69.352 224.551 64.504 226.663 59.8C228.775 55.096 230.983 50.44 233.287 45.832C235.687 41.128 238.039 36.376 240.343 31.576C245.431 30.04 249.895 31.96 253.735 37.336L259.207 47.416C260.551 44.824 261.847 42.232 263.095 39.64C264.343 37.048 265.639 34.36 266.983 31.576C272.071 30.04 276.583 31.96 280.519 37.336C268.423 54.808 260.791 71.08 257.623 86.152L288.727 47.992ZM230.551 87.736C230.647 87.64 232.855 84.664 237.175 78.808C241.495 72.856 247.879 64.456 256.327 53.608L250.423 42.52C239.959 58.456 233.335 73.528 230.551 87.736Z" />
              <path d="M293.777 31.576C298.865 30.04 303.377 32.008 307.313 37.48C300.401 47.464 294.929 57.112 290.897 66.424C293.681 62.104 296.465 58.072 299.249 54.328C302.129 50.488 304.865 47.08 307.457 44.104C310.049 41.032 312.449 38.44 314.657 36.328C316.961 34.216 318.929 32.632 320.561 31.576C325.745 30.04 330.209 32.008 333.953 37.48C321.953 54.76 314.321 70.936 311.057 86.008L342.161 47.992C345.521 49.336 345.521 52.456 342.161 57.352L309.329 102.856C300.977 101.032 296.513 96.568 295.937 89.464C298.049 81.88 300.545 74.728 303.425 68.008C306.305 61.192 309.377 54.424 312.641 47.704C310.817 49.432 308.801 51.736 306.593 54.616C304.481 57.4 302.321 60.472 300.113 63.832C297.905 67.192 295.745 70.696 293.633 74.344C291.617 77.992 289.793 81.544 288.161 85C286.529 88.36 285.185 91.528 284.129 94.504C283.169 97.384 282.641 99.784 282.545 101.704V102.856C282.353 102.856 281.969 102.76 281.393 102.568C273.905 100.552 269.873 96.184 269.297 89.464C270.737 84.184 272.369 79.096 274.193 74.2C276.113 69.304 278.129 64.504 280.241 59.8C282.353 55.096 284.561 50.44 286.865 45.832C289.169 41.128 291.473 36.376 293.777 31.576Z" />
            </mask>
            <path
              d="M112.608 47.848C115.872 49.192 115.824 52.312 112.464 57.208L79.632 102.712V102.856C71.472 100.84 67.008 96.376 66.24 89.464C67.488 85.048 68.976 80.824 70.704 76.792C72.528 72.664 74.496 68.632 76.608 64.696C78.72 60.76 80.88 56.92 83.088 53.176C85.392 49.336 87.648 45.448 89.856 41.512C88.32 39.016 86.256 37.864 83.664 38.056C82.608 40.648 80.88 44.104 78.48 48.424C76.08 52.648 73.248 57.304 69.984 62.392C66.72 67.384 63.072 72.568 59.04 77.944C55.008 83.32 50.88 88.36 46.656 93.064C42.432 97.768 38.16 101.944 33.84 105.592C29.52 109.24 25.392 111.832 21.456 113.368C21.168 113.368 20.976 113.416 20.88 113.512C18.096 113.224 15.216 112.456 12.24 111.208C9.36001 109.96 6.96002 108.52 5.04001 106.888C1.68001 103.336 0.0480146 98.632 0.144015 92.776C0.240015 86.824 1.48801 80.344 3.88801 73.336C6.28801 66.232 9.55201 58.936 13.68 51.448C17.808 43.96 22.32 36.856 27.216 30.136C32.112 23.416 37.056 17.464 42.048 12.28C47.04 6.99999 51.552 3.11199 55.584 0.615997C56.448 0.711996 57.552 1.096 58.896 1.768C60.24 2.44 61.632 3.25599 63.072 4.21599C64.512 5.17599 65.856 6.23199 67.104 7.384C68.448 8.536 69.504 9.688 70.272 10.84C70.848 13.72 70.704 17.128 69.84 21.064C68.976 24.904 67.68 28.888 65.952 33.016C64.224 37.144 62.16 41.176 59.76 45.112C57.36 48.952 54.912 52.264 52.416 55.048C49.92 56.68 47.136 57.64 44.064 57.928C40.992 58.216 38.256 57.4 35.856 55.48C38.256 53.656 40.8 50.92 43.488 47.272C46.272 43.528 48.864 39.592 51.264 35.464C53.76 31.24 55.92 27.16 57.744 23.224C59.568 19.192 60.768 15.928 61.344 13.432C57.792 15.928 53.904 19.576 49.68 24.376C45.456 29.176 41.328 34.504 37.296 40.36C33.36 46.216 29.712 52.36 26.352 58.792C22.992 65.128 20.448 71.176 18.72 76.936C18.432 77.896 18.048 79.24 17.568 80.968C17.184 82.6 16.848 84.328 16.56 86.152C16.368 87.88 16.272 89.656 16.272 91.48C16.272 93.208 16.56 94.648 17.136 95.8C17.712 96.952 18.576 97.72 19.728 98.104C20.976 98.488 22.656 98.2 24.768 97.24C28.128 95.032 31.776 92.008 35.712 88.168C39.744 84.232 43.728 79.912 47.664 75.208C51.6 70.408 55.392 65.368 59.04 60.088C62.784 54.808 66.048 49.72 68.832 44.824C71.616 39.832 73.824 35.224 75.456 31C77.088 26.776 77.904 23.32 77.904 20.632H89.424C88.848 23.704 87.84 27.208 86.4 31.144V31.288C91.872 31.864 96.096 33.16 99.072 35.176C102.048 37.192 103.968 39.976 104.832 43.528C104.832 43.528 103.968 44.632 102.24 46.84C100.608 49.048 98.592 52.024 96.192 55.768C93.888 59.512 91.488 63.88 88.992 68.872C86.496 73.768 84.432 78.904 82.8 84.28L112.608 47.848Z"
              stroke="#6D28D9"
              stroke-width="22"
              mask="url(#path-1-inside-1_1_5)"
            />
            <path
              d="M120.108 31.432C125.196 29.8 129.66 31.72 133.5 37.192C121.596 54.472 113.964 70.696 110.604 85.864L141.708 47.704C144.876 49.048 144.828 52.216 141.564 57.208L108.732 102.712C100.476 100.696 96.0604 96.184 95.4844 89.176C96.9244 83.896 98.5564 78.808 100.38 73.912C102.3 69.016 104.316 64.216 106.428 59.512C108.636 54.808 110.892 50.152 113.196 45.544C115.5 40.936 117.804 36.232 120.108 31.432ZM136.38 0.471999C138.492 0.0879979 140.892 0.0879979 143.58 0.471999C146.364 0.855999 148.716 1.672 150.636 2.91999L136.812 24.952C134.604 24.184 132.78 23.56 131.34 23.08C129.9 22.504 128.364 21.976 126.732 21.496L136.38 0.471999Z"
              stroke="#6D28D9"
              stroke-width="22"
              mask="url(#path-1-inside-1_1_5)"
            />
            <path
              d="M158.046 56.632C157.95 55.192 158.19 52.936 158.766 49.864C159.342 46.696 160.11 43.624 161.07 40.648C159.918 39.208 157.758 39.688 154.59 42.088C150.078 45.256 147.246 49 146.094 53.32C144.942 57.544 144.846 61.864 145.806 66.28C146.766 70.6 148.446 74.776 150.846 78.808C153.342 82.84 155.934 86.248 158.622 89.032C158.142 92.68 156.894 95.512 154.878 97.528C152.958 99.544 150.558 100.984 147.678 101.848C144.798 102.712 141.63 103.096 138.174 103C134.814 102.904 131.55 102.472 128.382 101.704C126.366 100.36 125.502 98.68 125.79 96.664C126.078 94.552 127.038 91.96 128.67 88.888C131.07 91.192 133.614 92.632 136.302 93.208C139.086 93.784 142.11 93.832 145.374 93.352C143.166 89.896 141.054 86.68 139.038 83.704C137.022 80.632 135.39 77.512 134.142 74.344C132.99 71.176 132.27 67.816 131.982 64.264C131.79 60.712 132.318 56.68 133.566 52.168C134.334 49.384 135.486 46.648 137.022 43.96C138.558 41.272 140.43 38.92 142.638 36.904C144.846 34.888 147.294 33.304 149.982 32.152C152.766 31 155.694 30.472 158.766 30.568C161.166 30.76 163.038 31.528 164.382 32.872C165.246 31.816 165.918 31.432 166.398 31.72L175.47 35.608C174.414 36.568 173.358 37.96 172.302 39.784C171.246 41.512 170.19 43.432 169.134 45.544C168.174 47.56 167.214 49.576 166.254 51.592C165.39 53.608 164.622 55.336 163.95 56.776L158.046 56.632Z"
              stroke="#6D28D9"
              stroke-width="22"
              mask="url(#path-1-inside-1_1_5)"
            />
            <path
              d="M199.283 0.471999C202.067 0.0879979 204.563 0.327998 206.771 1.192C208.979 2.056 211.043 3.784 212.963 6.376C211.619 8.392 210.179 10.696 208.643 13.288C207.203 15.88 205.715 18.568 204.179 21.352C204.851 21.352 205.475 21.352 206.051 21.352C206.627 21.352 207.155 21.448 207.635 21.64C208.787 22.792 209.459 24.424 209.651 26.536C208.307 26.536 206.963 26.536 205.619 26.536C204.275 26.536 202.931 26.632 201.587 26.824C199.283 31.432 196.979 36.28 194.675 41.368C192.467 46.456 190.403 51.544 188.483 56.632C186.563 61.72 184.787 66.712 183.155 71.608C181.523 76.504 180.179 81.112 179.123 85.432L209.651 48.136C213.011 49.48 212.963 52.552 209.507 57.352L176.531 103.288C172.307 102.232 169.043 100.6 166.739 98.392C164.435 96.184 163.091 93.256 162.707 89.608C163.571 86.056 164.867 81.832 166.595 76.936C168.419 72.04 170.435 66.808 172.643 61.24C174.851 55.672 177.203 49.96 179.699 44.104C182.291 38.248 184.835 32.584 187.331 27.112C186.755 27.304 186.179 27.4 185.603 27.4C185.123 27.4 184.547 27.4 183.875 27.4C183.011 26.632 182.243 25.672 181.571 24.52C180.899 23.368 180.467 22.072 180.275 20.632C181.907 20.632 183.491 20.68 185.027 20.776C186.659 20.776 188.291 20.776 189.923 20.776C191.843 16.744 193.571 13 195.107 9.54399C196.739 5.99199 198.131 2.968 199.283 0.471999Z"
              stroke="#6D28D9"
              stroke-width="22"
              mask="url(#path-1-inside-1_1_5)"
            />
            <path
              d="M214.749 31.432C219.837 29.8 224.301 31.72 228.141 37.192C216.237 54.472 208.605 70.696 205.245 85.864L236.349 47.704C239.517 49.048 239.469 52.216 236.205 57.208L203.373 102.712C195.117 100.696 190.701 96.184 190.125 89.176C191.565 83.896 193.197 78.808 195.021 73.912C196.941 69.016 198.957 64.216 201.069 59.512C203.277 54.808 205.533 50.152 207.837 45.544C210.141 40.936 212.445 36.232 214.749 31.432ZM231.021 0.471999C233.133 0.0879979 235.533 0.0879979 238.221 0.471999C241.005 0.855999 243.357 1.672 245.277 2.91999L231.453 24.952C229.245 24.184 227.421 23.56 225.981 23.08C224.541 22.504 223.005 21.976 221.373 21.496L231.021 0.471999Z"
              stroke="#6D28D9"
              stroke-width="22"
              mask="url(#path-1-inside-1_1_5)"
            />
            <path
              d="M288.727 47.992C291.991 49.336 291.991 52.504 288.727 57.496L255.751 103C247.495 100.984 243.031 96.52 242.359 89.608C243.031 87.4 243.703 85.192 244.375 82.984C245.047 80.776 245.767 78.616 246.535 76.504C245.191 78.712 243.655 81.16 241.927 83.848C240.391 86.152 238.567 88.936 236.455 92.2C234.343 95.368 231.895 98.968 229.111 103C220.759 100.984 216.295 96.52 215.719 89.608C217.159 84.328 218.791 79.24 220.615 74.344C222.535 69.352 224.551 64.504 226.663 59.8C228.775 55.096 230.983 50.44 233.287 45.832C235.687 41.128 238.039 36.376 240.343 31.576C245.431 30.04 249.895 31.96 253.735 37.336L259.207 47.416C260.551 44.824 261.847 42.232 263.095 39.64C264.343 37.048 265.639 34.36 266.983 31.576C272.071 30.04 276.583 31.96 280.519 37.336C268.423 54.808 260.791 71.08 257.623 86.152L288.727 47.992ZM230.551 87.736C230.647 87.64 232.855 84.664 237.175 78.808C241.495 72.856 247.879 64.456 256.327 53.608L250.423 42.52C239.959 58.456 233.335 73.528 230.551 87.736Z"
              stroke="#6D28D9"
              stroke-width="22"
              mask="url(#path-1-inside-1_1_5)"
            />
            <path
              d="M293.777 31.576C298.865 30.04 303.377 32.008 307.313 37.48C300.401 47.464 294.929 57.112 290.897 66.424C293.681 62.104 296.465 58.072 299.249 54.328C302.129 50.488 304.865 47.08 307.457 44.104C310.049 41.032 312.449 38.44 314.657 36.328C316.961 34.216 318.929 32.632 320.561 31.576C325.745 30.04 330.209 32.008 333.953 37.48C321.953 54.76 314.321 70.936 311.057 86.008L342.161 47.992C345.521 49.336 345.521 52.456 342.161 57.352L309.329 102.856C300.977 101.032 296.513 96.568 295.937 89.464C298.049 81.88 300.545 74.728 303.425 68.008C306.305 61.192 309.377 54.424 312.641 47.704C310.817 49.432 308.801 51.736 306.593 54.616C304.481 57.4 302.321 60.472 300.113 63.832C297.905 67.192 295.745 70.696 293.633 74.344C291.617 77.992 289.793 81.544 288.161 85C286.529 88.36 285.185 91.528 284.129 94.504C283.169 97.384 282.641 99.784 282.545 101.704V102.856C282.353 102.856 281.969 102.76 281.393 102.568C273.905 100.552 269.873 96.184 269.297 89.464C270.737 84.184 272.369 79.096 274.193 74.2C276.113 69.304 278.129 64.504 280.241 59.8C282.353 55.096 284.561 50.44 286.865 45.832C289.169 41.128 291.473 36.376 293.777 31.576Z"
              stroke="#6D28D9"
              stroke-width="22"
              mask="url(#path-1-inside-1_1_5)"
            />
          </svg> */}

          <img
            src="src\assets\face.png"
            className=" w-full drop-shadow-[0_35px_35px_rgb(109,40,217,0.25)]"
            alt=""
            onLoad={cristian}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
