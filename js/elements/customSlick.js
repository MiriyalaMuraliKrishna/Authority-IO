import $ from 'jquery';
import 'slick-carousel';

class mySlick {
  constructor(selector, nav) {
    this.eles = document.querySelectorAll(selector);
    this.navSelector = nav;
  }

  init() {
    if (this.eles.length === 0) return;

    const media = window.matchMedia('(min-width: 760px)');

    Array.from(this.eles).forEach((ele) => {
      if (ele.dataset.type === 'scrollNavSlider') {
        let initialized = false;

        const scrollnavSlick = () => {
          if (!media.matches) {
            if (!initialized) {
              // first nav

              $('ul.scroll-nav-links').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: false,
                asNavFor: '.scroll-nav-slider',
              });
              $('.scroll-nav-slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: 'ul.scroll-nav-links',
                dots: true,
                focusOnSelect: true,
                arrows: true,
                prevArrow: `
                  <button type="button" aria-label="Previous" tabindex="0"
                    class="slick-arrow slick-prev flex flex-center radius-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none">
                      <path d="M4.25818 12.6575L11.1306 19.7438C11.4824 20.094
                        12.0428 20.0839 12.3825 19.7213C12.7139 19.3675 12.7139
                        18.8067 12.3825 18.4529L7.02089 12.9241H19.1147C19.6036
                        12.9241 20 12.5154 20 12.0112C20 11.5071 19.6036 11.0983
                        19.1147 11.0983H7.02089L12.3825 5.56949C12.7342 5.21924
                        12.744 4.64132 12.4043 4.27868C12.0646 3.91605 11.5041
                        3.90601 11.1524 4.25626L4.25818 11.3654Z"
                        fill="white"/>
                    </svg>
                  </button>
                `,
                nextArrow: `
                  <button type="button" aria-label="Next" tabindex="0"
                    class="slick-arrow slick-next flex flex-center radius-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24" fill="none">
                      <path d="M19.7418 12.6575L12.8694 19.7438C12.5176 20.094
                        11.9572 20.0839 11.6175 19.7213C11.2861 19.3675 11.2861
                        18.8067 11.6175 18.4529L16.9791 12.9241H4.88534C4.39638
                        12.9241 4 12.5154 4 12.0112C4 11.5071 4.39638 11.0983
                        4.88534 11.0983H16.9791L11.6175 5.56949C11.2658 5.21924
                        11.256 4.64132 11.5957 4.27868C11.9354 3.91605 12.4959
                        3.90601 12.8476 4.25626L19.7418 11.3654Z"
                        fill="white"/>
                    </svg>
                  </button>
                `,
              });
              $('ul.scroll-nav-links li a').on('click', function (e) {
                e.preventDefault();
                const slideno = $(this).data('slide');
                $('.scroll-nav-slider').slick('slickGoTo', slideno - 1);
              });

              // const $nav = $(this.navSelector).slick({
              //   slidesToShow: 1,
              //   slidesToScroll: 1,
              //   infinite: false,
              //   asNavFor: $for,
              //   arrows: false,
              //   variableWidth: true,
              // });

              // // then main slider, linking with $nav
              // const $for = $(ele).slick({
              //   slidesToShow: 1,
              //   slidesToScroll: 1,
              //   infinite: false,
              //   speed: 1000,
              //   dots: true,
              //   asNavFor: $nav,
              //   focusOnSelect: true,
              //   arrows: true,
              //   prevArrow: `
              //     <button type="button" aria-label="Previous" tabindex="0"
              //       class="slick-arrow slick-prev flex flex-center radius-50">
              //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              //         viewBox="0 0 24 24" fill="none">
              //         <path d="M4.25818 12.6575L11.1306 19.7438C11.4824 20.094
              //           12.0428 20.0839 12.3825 19.7213C12.7139 19.3675 12.7139
              //           18.8067 12.3825 18.4529L7.02089 12.9241H19.1147C19.6036
              //           12.9241 20 12.5154 20 12.0112C20 11.5071 19.6036 11.0983
              //           19.1147 11.0983H7.02089L12.3825 5.56949C12.7342 5.21924
              //           12.744 4.64132 12.4043 4.27868C12.0646 3.91605 11.5041
              //           3.90601 11.1524 4.25626L4.25818 11.3654Z"
              //           fill="white"/>
              //       </svg>
              //     </button>
              //   `,
              //   nextArrow: `
              //     <button type="button" aria-label="Next" tabindex="0"
              //       class="slick-arrow slick-next flex flex-center radius-50">
              //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              //         viewBox="0 0 24 24" fill="none">
              //         <path d="M19.7418 12.6575L12.8694 19.7438C12.5176 20.094
              //           11.9572 20.0839 11.6175 19.7213C11.2861 19.3675 11.2861
              //           18.8067 11.6175 18.4529L16.9791 12.9241H4.88534C4.39638
              //           12.9241 4 12.5154 4 12.0112C4 11.5071 4.39638 11.0983
              //           4.88534 11.0983H16.9791L11.6175 5.56949C11.2658 5.21924
              //           11.256 4.64132 11.5957 4.27868C11.9354 3.91605 12.4959
              //           3.90601 12.8476 4.25626L19.7418 11.3654Z"
              //           fill="white"/>
              //       </svg>
              //     </button>
              //   `,
              // });
              // $('ul.scroll-nav-links li a').click(function (e) {
              //   e.preventDefault();
              //   var slideno = $(this).data('slide');
              //   $('.slider-nav').slick('slickGoTo', slideno - 1);
              // });
              initialized = true;
            }
          } else {
            if (initialized) {
              $(ele).slick('unslick');
              $(this.navSelector).slick('unslick');
              initialized = false;
            }
          }
        };

        scrollnavSlick();
        media.addEventListener('change', scrollnavSlick);
      }
    });
  }
}

export const slickme = new mySlick('.scroll-nav-slider', 'ul.scroll-nav-links');
