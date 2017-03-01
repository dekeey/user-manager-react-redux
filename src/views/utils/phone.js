
const mobilePhoneCodesRu =
  [900, 901, 902, 903, 904, 905, 906, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 936, 937, 938, 939, 941, 950, 951, 952, 953, 958, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 977, 978, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 991, 992, 993, 994, 995, 996, 999];

export const isValidPhoneNumber = (phoneNumber) => {
  if ( phoneNumber && phoneNumber.length == 10) {
    let phoneCode = phoneNumber.slice(0,3);
    return mobilePhoneCodesRu.indexOf(parseInt(phoneCode)) >= 0;
  }
  return false
};