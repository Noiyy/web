<template>
    <div class="projects-main d-flex flex-column flex-1">
        <Header></Header>
        
        <section id="projects" class="pos-relative">
            <div class="projects-categories">
                <ul class="d-flex flex-column ">
                    <li v-for="(ctg, index) in categories" :key="index" :class="ctg.active ? 'active' : null"
                        class="d-flex align-items-center gap-16"
                        @click="changeCategory(ctg, index)">
                        <Icon :icon="ctg.icon" class="ctg-icon" />
                        <template v-if="!IS_MOBILE"> {{ ctg.name }}  </template>
                    </li>
                </ul>
            </div>
    
            <div class="container">
                <div class="content">
                    <div class="title flex-column gap-8">
                        <h1 class="section-heading"> Projects </h1>
                        <router-link to="/projects/archive" class="gap-8 align-items-center archive-link">
                            <Icon icon="bx:archive" class="title-icon" /> <h4> Archive </h4> 
                         </router-link>
                    </div>
    
                    <div class="filters d-flex align-items-center gap-8">
                        <Icon icon="mdi:filter-outline" class="title-icon" />
                        <div class="pills-wrapper d-flex gap-16 flex-wrap">
                            <div class="filter-pill" v-for="(filter, index) in availableFilters" :key="index"
                                :class="filter.active ? 'active' : null"
                                :style="`border-color: ${filter.color};`"
                                @click="filterProjects(filter)">
                                <Icon :icon="filter.icon" class="pill-icon" :class="filter.id" />
                                <template v-if="!IS_MOBILE"> {{ filter.name }} </template> ({{ filter.count }})
                            </div>
                        </div>
                    </div>
    
                    <template v-if="filteredProjects.length">
                        <div class="projects-wrapper">

                            <template v-for="(proj, i) in filteredProjects" :key="proj.id">
                                <router-link v-if="proj.shortInfo" :to="`/projects/${proj.id}`" class="project-card d-flex" 
                                    :class="((i % 4 === 1) || (i % 4 === 2)) ? '2col' : null">
                                    <ProjectCard
                                        :project-data="proj"
                                    ></ProjectCard>
                                </router-link>
                                <a v-else :href="proj.link" target="_blank" class="project-card d-flex" 
                                    :class="((i % 4 === 1) || (i % 4 === 2)) ? '2col' : null">
                                    <ProjectCard
                                        :project-data="proj"
                                    ></ProjectCard>
                                </a>
                            </template>

                        </div> 
                        <p class="text-center after-projects"> ... and many more to come! :) </p>
                    </template>
                    <div class="projects-wrapper no-projects d-flex justify-content-center align-items-center" v-else>
                        <Icon icon="ion:sad-outline" class="no-projects-icon" />
                        Oh no! Looks like there are no projects in this category yet...
                    </div>
                </div>
            </div>

            <div id="sky-clouds-vector" :class="filteredProjects.length ? null : 'smaller'">
                <svg width="100%" height="100%" viewBox="0 0 357 722" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="gradient">
                            <stop offset="0%" stop-color="var(--gradient-primary)" />
                            <stop offset="100%" stop-color="var(--gradient-secondary)"/>
                        </linearGradient>
                    </defs>
                    <g class="sky">
                        <path d="M632 722V33.252L552.838 2.25129C545.03 -0.824027 536.334 -0.7644 528.569 2.41764C520.805 5.59969 514.571 11.6578 511.172 19.3257C507.773 26.9935 507.472 35.6773 510.331 43.5619C513.191 51.4465 518.99 57.9215 526.515 61.6332L519.041 58.7106L421.572 20.5227C414.211 17.6348 406.048 17.5253 398.612 20.2146C391.175 22.9039 384.974 28.2078 381.167 35.1346C377.359 42.0614 376.208 50.1367 377.926 57.8506C379.645 65.5644 384.117 72.3886 390.505 77.0469L302.677 42.6475C294.646 39.5092 285.697 39.6856 277.796 43.1379C269.895 46.5901 263.69 53.0358 260.543 61.0582C257.396 69.0807 257.565 78.0236 261.013 85.9213C264.462 93.8191 270.907 100.026 278.933 103.177L300.359 111.576C299.623 111.511 298.908 111.49 298.193 111.49C290.994 111.491 283.999 113.877 278.304 118.276C272.608 122.675 268.533 128.837 266.717 135.797C264.902 142.758 265.448 150.124 268.27 156.741C271.092 163.358 276.031 168.853 282.313 172.365L247.368 158.684C240.149 155.859 232.158 155.702 224.834 158.241C217.51 160.781 211.334 165.85 207.418 172.535C203.501 179.221 202.103 187.084 203.473 194.709C204.843 202.334 208.893 209.219 214.893 214.125L137.485 183.796C129.938 180.841 121.56 180.807 113.989 183.702C106.419 186.596 100.203 192.21 96.5572 199.444C92.9117 206.678 92.0998 215.012 94.2804 222.812C96.461 230.613 101.477 237.32 108.347 241.619L44.4146 216.572C40.4359 215.007 36.1874 214.241 31.9122 214.318C27.6371 214.395 23.4191 215.314 19.4995 217.021C15.5799 218.729 12.0357 221.192 9.06945 224.269C6.10323 227.347 3.77324 230.978 2.21276 234.956C0.652278 238.934 -0.108085 243.181 -0.0248398 247.453C0.0584057 251.724 0.983627 255.938 2.6979 259.852C4.41218 263.767 6.88188 267.305 9.96575 270.264C13.0496 273.224 16.6871 275.547 20.6703 277.101L43.2014 285.934C36.4563 285.203 29.6581 286.711 23.8556 290.224C18.0531 293.738 13.5689 299.061 11.0947 305.374L9.94645 308.362C8.46378 312.14 7.74046 316.173 7.81778 320.23C7.89509 324.288 8.77155 328.291 10.3971 332.01C12.0226 335.729 14.3654 339.091 17.2916 341.906C20.2178 344.72 23.6701 346.93 27.4514 348.411L115.518 382.919C109.197 382.538 102.917 384.168 97.5806 387.575C92.2442 390.982 88.1255 395.991 85.8156 401.883L83.9525 406.646C81.053 414.041 81.2112 422.284 84.3921 429.563C87.5731 436.842 93.5166 442.56 100.916 445.462L345.53 541.278L389.401 558.467C384.222 558.174 379.084 559.524 374.718 562.323C370.353 565.122 366.984 569.228 365.093 574.054L359.33 588.753C356.949 594.828 357.078 601.599 359.69 607.579C362.302 613.558 367.183 618.256 373.261 620.641L632 722Z" 
                            fill="#00F2FE"/>
                    </g>
                    <g>
                        <path d="M357.431 178.354V371.964C348.591 373.908 339.442 373.968 330.577 372.141C326.248 385.164 317.895 396.473 306.723 404.435C295.551 412.397 282.139 416.6 268.423 416.438C254.708 416.275 241.399 411.756 230.418 403.531C219.438 395.307 211.354 383.803 207.335 370.682C206.871 371.19 206.384 371.699 205.876 372.185C201.762 376.16 196.863 379.232 191.495 381.205C186.127 383.179 180.406 384.01 174.698 383.646C168.99 383.281 163.421 381.73 158.347 379.09C153.272 376.451 148.804 372.781 145.228 368.315C136.186 371.409 126.35 371.253 117.411 367.874C108.472 364.496 100.989 358.107 96.2489 349.806C96.2465 349.789 96.2388 349.773 96.2268 349.762C93.7055 345.404 92.026 340.61 91.2759 335.631C90.4741 336.122 89.6396 336.558 88.7783 336.935C85.5855 338.415 82.1077 339.177 78.5892 339.169C73.715 339.17 68.9527 337.708 64.918 334.972C60.8832 332.236 57.7615 328.352 55.9564 323.822C53.3573 319.731 51.9843 314.98 52.0001 310.133C52.0044 308.554 52.1449 306.978 52.4201 305.422C53.5282 299.556 56.6463 294.259 61.2373 290.444C65.8283 286.63 71.6049 284.536 77.5725 284.525C78.1692 284.525 78.7439 284.547 79.3185 284.591H79.3628C84.2601 284.929 88.9563 286.672 92.8893 289.611C93.6799 286.018 94.959 282.551 96.6909 279.306C99.4599 274.133 103.309 269.617 107.977 266.064C112.645 262.512 118.022 260.006 123.744 258.717C126.681 258.048 129.684 257.714 132.696 257.722C133.248 257.722 133.779 257.722 134.309 257.744C135.803 257.806 137.294 257.947 138.774 258.164H138.796C146.526 259.34 153.754 262.718 159.616 267.895C164.681 272.34 168.568 277.969 170.932 284.281C177.305 277.868 185.621 273.746 194.582 272.561H194.604C198.464 272.025 202.381 272.062 206.23 272.671C207.822 258.98 213.491 246.084 222.501 235.657C231.511 225.231 243.445 217.755 256.756 214.201C262.521 212.65 268.467 211.87 274.437 211.879C275.94 211.879 277.443 211.923 278.924 212.034L279.919 212.1C283.179 212.353 286.416 212.856 289.599 213.604C293.124 207.322 297.597 201.623 302.861 196.709C303.082 196.488 303.325 196.289 303.524 196.09C305.027 194.719 306.596 193.414 308.21 192.197C310.953 190.087 313.858 188.194 316.896 186.536L317.161 186.404C327.341 180.866 338.749 177.976 350.337 178C352.458 178 354.558 178.089 356.636 178.288L357.431 178.354Z"
                            fill="white"/>
                        <path d="M336.5 259.933C336.499 263.1 335.241 266.136 333.003 268.376C330.765 270.615 327.73 271.873 324.565 271.875C323.799 271.884 323.035 271.802 322.289 271.632C319.289 269.197 315.543 267.869 311.68 267.873C310.331 267.864 308.986 268.027 307.679 268.359C305.312 266.058 302.324 264.502 299.083 263.882C295.842 263.263 292.49 263.607 289.442 264.873C286.395 266.139 283.785 268.271 281.935 271.005C280.085 273.739 279.077 276.955 279.035 280.256C277.083 279.375 274.965 278.923 272.824 278.93C268.783 278.935 264.909 280.545 262.053 283.406C259.198 286.267 257.595 290.145 257.595 294.188C257.588 295.359 257.729 296.526 258.015 297.66C254.6 296.956 251.41 295.425 248.724 293.2C246.039 290.975 243.939 288.126 242.61 284.9C240.959 285.737 239.134 286.169 237.283 286.161C235.38 286.159 233.506 285.702 231.815 284.827C230.125 283.953 228.668 282.687 227.566 281.135C226.464 279.582 225.749 277.789 225.481 275.904C225.212 274.02 225.398 272.098 226.023 270.299C226.647 268.501 227.693 266.878 229.071 265.566C230.45 264.254 232.123 263.291 233.949 262.757C235.776 262.223 237.703 262.134 239.571 262.496C241.439 262.859 243.193 263.664 244.688 264.843C247.553 260.622 251.838 257.571 256.762 256.244C261.686 254.917 266.923 255.402 271.52 257.611C272.42 252.268 274.946 247.333 278.752 243.478C282.559 239.624 287.461 237.038 292.79 236.073C298.119 235.108 303.616 235.811 308.531 238.087C313.446 240.362 317.541 244.099 320.255 248.788C321.627 248.245 323.09 247.968 324.565 247.97C327.733 247.973 330.771 249.235 333.009 251.478C335.247 253.722 336.503 256.763 336.5 259.933Z" 
                            fill="#D0D2D3"/>
                        <path d="M329.936 330.279C329.935 330.924 330.06 331.563 330.307 332.159C330.553 332.756 330.914 333.297 331.37 333.754C331.826 334.21 332.367 334.571 332.963 334.818C333.559 335.064 334.198 335.19 334.843 335.188C335.415 335.186 335.982 335.089 336.522 334.901C337.285 336.05 338.32 336.992 339.535 337.644C340.749 338.296 342.106 338.638 343.485 338.638C344.239 338.638 344.991 338.533 345.717 338.329C346.461 339.056 347.462 339.461 348.502 339.456C348.925 339.462 349.345 339.387 349.74 339.235C352.02 340.747 354.695 341.555 357.431 341.557V371.964C348.591 373.908 339.442 373.968 330.577 372.141C326.248 385.164 317.895 396.473 306.723 404.435C295.551 412.397 282.139 416.6 268.423 416.438C254.708 416.275 241.399 411.756 230.418 403.531C219.438 395.307 211.354 383.803 207.335 370.682C206.871 371.19 206.384 371.699 205.876 372.185C201.762 376.16 196.863 379.232 191.495 381.206C186.127 383.179 180.406 384.01 174.698 383.646C168.99 383.282 163.421 381.73 158.347 379.09C153.272 376.451 148.804 372.781 145.228 368.315C136.186 371.409 126.35 371.253 117.411 367.874C108.472 364.496 100.989 358.107 96.2489 349.806C96.2465 349.789 96.2388 349.773 96.2268 349.762C93.7055 345.404 92.026 340.61 91.2759 335.631C90.4741 336.122 89.6396 336.558 88.7783 336.935C85.5855 338.415 82.1077 339.177 78.5892 339.169C73.715 339.17 68.9527 337.708 64.918 334.972C60.8832 332.236 57.7615 328.352 55.9564 323.822C53.3573 319.731 51.9843 314.98 52.0001 310.133C52.0044 308.554 52.1449 306.978 52.4201 305.422C53.9148 304.478 55.5083 303.699 57.1721 303.1C60.077 302.012 63.1543 301.458 66.2561 301.464C71.6824 301.461 76.9743 303.153 81.3926 306.305C85.8108 309.457 89.1348 313.911 90.9001 319.045C92.3677 318.554 93.9058 318.307 95.4532 318.315C98.7693 318.307 101.989 319.431 104.581 321.5C107.797 317.095 111.943 313.454 116.726 310.836C121.509 308.218 126.809 306.688 132.251 306.354C137.692 306.021 143.14 306.892 148.206 308.906C153.272 310.92 157.832 314.027 161.561 318.006C160.989 318.404 160.532 318.945 160.235 319.576C159.514 319.167 158.699 318.954 157.87 318.956C156.575 318.957 155.332 319.472 154.417 320.388C153.501 321.305 152.986 322.548 152.985 323.844C152.982 324.006 152.989 324.169 153.007 324.33C152.628 324.26 152.244 324.222 151.858 324.22C150.079 324.22 148.373 324.927 147.115 326.185C145.857 327.444 145.15 329.151 145.15 330.931C145.15 332.711 145.857 334.418 147.115 335.677C148.373 336.936 150.079 337.643 151.858 337.643C152.199 337.647 152.54 337.618 152.875 337.554C153.375 339.475 154.423 341.209 155.891 342.544C157.358 343.879 159.182 344.759 161.141 345.075C163.099 345.392 165.107 345.131 166.92 344.326C168.733 343.521 170.273 342.205 171.352 340.54C171.527 340.487 171.697 340.421 171.861 340.341C173.959 342.097 176.653 342.976 179.383 342.794C182.112 342.613 184.667 341.386 186.515 339.368C187.141 339.913 187.911 340.266 188.733 340.385C189.555 340.504 190.393 340.383 191.148 340.038C191.903 339.693 192.543 339.138 192.992 338.438C193.44 337.739 193.677 336.926 193.676 336.095C193.679 335.589 193.59 335.087 193.41 334.613C195.52 334.13 197.478 333.135 199.113 331.716C199.64 331.85 200.182 331.917 200.726 331.915C202.564 331.916 204.328 331.196 205.642 329.91C206.956 328.625 207.714 326.876 207.755 325.038C209.032 324.434 210.111 323.479 210.866 322.285C211.621 321.09 212.022 319.706 212.021 318.293C212.023 316.891 211.633 315.516 210.897 314.323C210.16 313.13 209.105 312.167 207.85 311.542C206.596 310.917 205.192 310.654 203.797 310.784C202.401 310.914 201.07 311.432 199.953 312.278C198.954 311.233 197.779 310.372 196.483 309.735C204.219 306.144 212.955 305.327 221.222 307.421C229.489 309.515 236.784 314.393 241.881 321.234C249.275 321.509 256.537 323.276 263.232 326.431C261.38 327.989 259.817 329.86 258.612 331.959C257.97 331.683 257.278 331.54 256.579 331.539C255.915 331.537 255.258 331.665 254.644 331.917C254.03 332.17 253.472 332.541 253.002 333.009C252.532 333.477 252.158 334.034 251.904 334.647C251.649 335.26 251.518 335.917 251.517 336.581C251.514 337.138 251.603 337.691 251.783 338.218C251.621 338.199 251.459 338.192 251.296 338.196C248.534 338.194 245.816 338.883 243.388 340.2C240.96 341.517 238.9 343.42 237.394 345.737C235.996 345.031 234.451 344.667 232.885 344.675C232.134 344.677 231.386 344.759 230.653 344.918C230.171 344.373 229.579 343.935 228.917 343.634C228.254 343.333 227.535 343.175 226.807 343.171C225.468 343.176 224.185 343.712 223.241 344.661C222.296 345.61 221.766 346.896 221.768 348.236C221.776 349.566 222.298 350.842 223.226 351.796C222.915 352.768 222.758 353.783 222.762 354.804C222.762 356.134 223.024 357.451 223.532 358.68C224.041 359.909 224.787 361.025 225.727 361.966C226.667 362.906 227.783 363.652 229.011 364.161C230.239 364.67 231.556 364.932 232.885 364.932C234.451 364.94 235.996 364.576 237.394 363.87C238.711 365.898 240.456 367.613 242.506 368.894C244.556 370.176 246.861 370.993 249.26 371.288C251.659 371.583 254.094 371.349 256.393 370.602C258.692 369.856 260.8 368.615 262.568 366.966C263.512 368.952 265.103 370.558 267.08 371.519C269.057 372.481 271.301 372.741 273.446 372.258C275.59 371.774 277.506 370.576 278.879 368.858C280.252 367.141 281.001 365.008 281.002 362.809C281.005 362.646 280.998 362.484 280.98 362.322C286.302 361.133 290.936 357.88 293.865 353.278C296.367 353.165 298.737 352.127 300.518 350.367C302.299 348.606 303.364 346.247 303.507 343.746C303.65 341.245 302.861 338.779 301.292 336.827C299.723 334.874 297.487 333.573 295.015 333.176C293.764 330.614 291.998 328.338 289.826 326.492C287.654 324.646 285.124 323.27 282.394 322.45C288.103 319.497 294.483 318.082 300.905 318.346C307.327 318.61 313.569 320.543 319.018 323.954C317.932 320.59 317.249 317.108 316.984 313.583C318.35 313.399 319.653 312.895 320.786 312.111C321.919 311.327 322.851 310.285 323.504 309.071C324.608 309.313 325.734 309.431 326.864 309.425C330.839 309.424 334.677 307.967 337.652 305.328C340.627 302.69 342.534 299.054 343.012 295.105C343.491 291.156 342.509 287.169 340.25 283.896C337.992 280.622 334.614 278.289 330.754 277.337C338.013 270.334 347.403 265.96 357.431 264.909V310.796C356.669 311.073 355.974 311.511 355.395 312.079C354.815 312.648 354.364 313.334 354.072 314.091C352.002 314.604 350.078 315.584 348.446 316.956C346.814 318.329 345.517 320.057 344.656 322.008C344.269 321.945 343.877 321.915 343.485 321.92C342.822 321.92 342.161 322.002 341.518 322.163C340.839 321.643 340.007 321.363 339.153 321.367C338.626 321.364 338.103 321.466 337.616 321.666C337.128 321.866 336.685 322.161 336.311 322.532C335.937 322.904 335.64 323.346 335.438 323.833C335.235 324.32 335.131 324.842 335.13 325.369V325.392C335.036 325.373 334.939 325.366 334.843 325.369C334.198 325.368 333.559 325.494 332.963 325.74C332.367 325.986 331.826 326.348 331.37 326.804C330.914 327.26 330.553 327.802 330.307 328.398C330.06 328.995 329.935 329.634 329.936 330.279Z" 
                            fill="#D0D2D3"/>
                    </g>
                </svg>
            </div>
        </section>
    </div>

    <Footer></Footer>
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';
import ProjectCard from './ProjectCard.vue';
import { mapGetters, mapActions } from 'vuex';

import { Icon } from '@iconify/vue';

export default {
    name: 'ProjectsContent',

    inject: ['emitter'],
    emits: [],

    props: {

    },

    components: {
        Header,
        Footer,
        ProjectCard,
        Icon
    },

    data() {
        return {
            activeCategory: "web",

            categories: [
                {
                    name: "Webdev",
                    id: "web",
                    icon: "mdi:globe",
                    active: true,
                },
                {
                    name: "Gamedev",
                    id: "game",
                    icon: "material-symbols:stadia-controller-outline",
                },
                {
                    name: "Others",
                    id: "other",
                    icon: "ph:question",
                }
            ],

            filters: [
                {
                    name: "All",
                    id: "all",
                    icon: "mdi:tick-all",
                    active: true,
                    color: "var(--gradient-primary)",
                    categories: ["web", "game", "other"],
                    count: 0
                },
                {
                    name: "Study",
                    id: "study",
                    icon: "oi:book",
                    color: "var(--gold)",
                    categories: ["web", "game", "other"],
                    count: 0
                },
                {
                    name: "Work",
                    id: "work",
                    icon: "majesticons:suitcase-line",
                    color: "var(--green)",
                    categories: ["web", "game", "other"],
                    count: 0
                },
                {
                    name: "Jam",
                    id: "jam",
                    icon: "cib:iconjar",
                    color: "var(--orange)",
                    categories: ["game"],
                    count: 0
                },
            ],
            availableFilters: [],

            projects: [],
            filteredProjects: []
        }
    },

    methods: {
        ...mapActions(
            {

            }
        ),

        changeCategory(category, index) {
            if (category.active) return;
            this.categories.forEach(ctg => ctg.active = false);
            this.categories[index].active = true;
            this.activeCategory = category.id;

            this.setupFiltersAndProjects();
        },

        setupFiltersAndProjects() {
            this.filteredProjects = this.projects.filter(proj => proj.category == this.activeCategory);
            this.filters.forEach(fltr => {
                fltr.count = 0;
                this.filteredProjects.forEach(proj => {
                    if (fltr.id == "all") fltr.count++;
                    else if (proj.tags.includes(fltr.id)) fltr.count++;
                });
            });
            this.availableFilters = this.filters.filter(fltr => fltr.categories.includes(this.activeCategory));
        },

        applyAllFilter(allFilter) {
            allFilter.active = true;
            this.availableFilters.forEach(fltr => fltr.id != "all" ? fltr.active = false : null);
            this.setupFiltersAndProjects();
        },

        filterProjects(filter) {
            const allFilter = this.availableFilters.find(fltr => fltr.id == "all");
            if (filter.id == "all") this.applyAllFilter(allFilter)
            else {
                filter.active = !filter.active;
                if (this.availableFilters.find(fltr => fltr.active && fltr.id != "all")) allFilter.active = false;
                else if (!this.availableFilters.find(fltr => fltr.active)) {
                    this.applyAllFilter(allFilter);
                    return;
                }

                const activeFilters = this.availableFilters.filter(fltr => fltr.id != "all" && fltr.active).map(fltr => fltr.id);
                this.filteredProjects = this.projects.filter(proj => proj.category == this.activeCategory && 
                    proj.tags.some(tag => activeFilters.includes(tag))  
                );
            }

        }
    },
    
    computed: {
        ...mapGetters(
            {
                getProjects: "project/getProjects",
                IS_MOBILE: "misc/getIsMobile"
            }
        ),
    },

    created() {
        this.projects = this.getProjects;
        this.setupFiltersAndProjects();
    },

    mounted() {

    }
}
</script>

<style scoped>
#projects {
    margin-top: 96px;
    overflow: hidden;
}

.title {
    max-width: 33%;
    display: inline-block;
}

.title-icon {
    font-size: 28px;
}

h4 {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    text-transform: uppercase;
}

.filters {
    margin-top: 48px;
}

.filter-pill {
    border: 1px solid white;
    border-radius: 32px;
    padding: 4px 24px;
    display: flex;
    gap: 8px;
    align-items: center;
    opacity: 0.5;
    text-transform: uppercase;
    transition: background 0.2s ease-in;
    user-select: none;
    font-size: 14px;
}
.filter-pill.active {
    opacity: 1;
}
.filter-pill:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
}

.pill-icon {
    font-size: 24px;
}
.pill-icon.all { color: var(--gradient-primary) }
.pill-icon.study { color: var(--gold) }
.pill-icon.work { color: var(--green) }
.pill-icon.jam { color: var(--orange) }


.projects-categories {
    position: absolute;
    top: 0;
    right: -1px;
}

.projects-categories ul {
    gap: 4px;
    align-items: flex-end;
}

.projects-categories li {
    padding: 12px 8px;
    border: 1px solid white;
    font-size: 20px;
    font-style: normal;
    font-weight: 100;
    line-height: 100%;
    text-transform: uppercase;
    width: 80%;
    transition: width 0.2s ease-in;
    border-bottom-left-radius: 16px;
}

.projects-categories li.active {
    color: var(--black);
    background: var(--gradient-straight);
    font-weight: 600;
    border: none;
    padding-right: 56px;
    width: 100%;
}
.projects-categories li:not(.active):hover {
    background: rgba(255, 255, 255, 0.2);
    width: 90%;
    cursor: pointer;
}

.ctg-icon {
    font-size: 32px;
}

.projects-wrapper {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: 16px;
    margin: 8px 0 8px 0;
    margin-top: 112px;
}

.after-projects {
    font-size: 16px;
    font-weight: 100;
    font-style: italic;
    margin-top: 56px;
    margin-bottom: 172px;
    color: rgba(255, 255, 255, 0.75);
}

.no-projects-icon {
    font-size: 20px;
}

#sky-clouds-vector {
    position: absolute;
    bottom: -12vw;
    right: 0;
    width: 27.5%;
    z-index: -1;
}
#sky-clouds-vector.smaller {
    width: 25%;
    bottom: -12vw;
}

.archive-link {
    display: inline-flex;
}
.archive-link h4 {
    transition: color 0.2s ease-in;
}
.archive-link:hover h4 {
    color: rgba(255, 255, 255, 0.5);
}

.no-projects {
    margin-bottom: 30vw;
}

/* SMALL - Mobile */
@media(max-width: 640px) {
    #projects {
        margin-top: 64px;
    }

    .title {
        margin-top: 40px;
    }

    .section-heading {
        display: none;
    }

    .filters {
        margin-top: 24px;
        max-width: 70%;
        align-items: flex-start !important;
    }

    .pills-wrapper {
        gap: 8px !important;
    }

    .filter-pill {
        font-size: 16px;
        padding: 2px 16px;
    }

    .projects-categories ul {
        gap: 2px;
    }

    .projects-categories li {
        padding: 8px;
        width: 60%;
    }

    .projects-categories li.active {
        padding-right: 32px;
    }

    .archive-link h4 {
        font-size: 20px;
    }

    .title-icon {
        font-size: 24px;
    }

    .filters .title-icon {
        font-size: 32px;
    }

    .projects-wrapper {
        margin-top: 40px;
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    .after-projects {
        margin-top: 32px;
        margin-bottom: 75vw;
    }

    #sky-clouds-vector {
        bottom: -35vw;
        width: 60%;
    }

    #sky-clouds-vector.smaller {
        width: 50%;
        bottom: -23vw;
    }

    .no-projects {
        margin-top: 20vw;
        margin-bottom: 75vw;
    }
}
/* MEDIUM - Tablet */
@media(min-width: 641px) and (max-width: 992px) {
    .no-projects {
        margin-bottom: 40vw;
    }

    #sky-clouds-vector.smaller {
        width: 33%;
        bottom: -15vw;
    }
}

/* XL */
@media(min-width: 1400px) {
   
}

</style>