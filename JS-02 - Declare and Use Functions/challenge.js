function result(score) {
  switch (score) {
    case 1:
      return false;
      break;
    case 2:
      return false;
      break;
    case 3:
      return false;
      break;
    case 4:
      return false;
      break;
    case 5:
      return true;
      break;
    case 6:
      return true;
      break;
    case 7:
      return true;
      break;
    case 8:
      return true;
      break;
    case 9:
      return "Excellent";
      break;
    case 10:
      return "Excellent";
      break;
    case 11:
      return "Perfect";
      break;
  }
}

console.log(result(5));
