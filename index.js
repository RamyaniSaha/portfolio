let section = document.querySelectorAll('section');

const monitor = new IntersectionObserver((entry) => {
    entry.forEach((item) => {
          console.log(typeof item);
          console.log(item.target);
          console.log(item);

          item.target.classList.toggle('show-animation', item.isIntersecting);
          if (item.isIntersecting) {
            item.classList.add('show-animation');
      }else{
        item.classList.remove('show-animation');
      }
})
});

section.forEach((section) => {
    monitor.observe(section);
})


