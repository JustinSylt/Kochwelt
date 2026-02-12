function calculatePortions() {
  // get number of portions wanted
  let number_of_schnitzel = document.getElementById('portion-value').value;
  number_of_schnitzel = parseInt(number_of_schnitzel, 10);

  // get elements of each td
  // count of schnitzel needed
  let schnitzel_count = 1;

  // count of breading needed
  let breading_count = 40;

  // count of flour needed
  let flour_count = 20;

  // count of butter needed
  let butter_count = 40;

  // count of eggs needed
  let egg_count = 1;

  document.getElementById('schnitzel-count').innerHTML =
    number_of_schnitzel * schnitzel_count;

  document.getElementById('breading-count').innerHTML =
    number_of_schnitzel * breading_count;

  document.getElementById('flour-count').innerHTML =
    number_of_schnitzel * flour_count;

  document.getElementById('butter-count').innerHTML =
    number_of_schnitzel * butter_count;

  document.getElementById('egg-count').innerHTML =
    number_of_schnitzel * egg_count;
}
