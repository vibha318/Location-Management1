const CB = 1; // * Base cost per impression
// placement factor
const PF = {
  home: 1.2,
  core_listing: 1.3,
  other_listing: 1.2,
  blog_sidebar: 1.2,
  blog_bottom: 1.1,
  popup: 1.5,
  none: 1.1,
};
// targeting factor
const TF = {
  all: 1,
  city: 1.2,
  city_core_listing: 1.3,
  city_other_listing: 1.3,
  city_blog_subcategory: 1.3,
  core_listing: 1.2,
  other_listing: 1.2,
  blog_subcategory: 1.2,
};
const C1 = 0.4;
const C2 = 0.2;
const C3 = 0.1;
const _C4 = 0.3; // ! pending - for user experience (UE)

module.exports.calculateAdScore = (
  ad,
  { highestRemainingBudget, reqAdType, reqPosition },
) => {
  // ad score = CTR*C1 + HR*C2 + BS*C3 + UE*C4
  const ctr = ad.ctr;
  const hrVal = calculateHR(ad, { reqAdType, reqPosition });
  const bsVal = calculateBS(ad.remainingBudget, highestRemainingBudget);
  const score = ctr * C1 + hrVal * C2 + bsVal * C3;
  return [score, hrVal * C3];
};

const calculateHR = (ad, { reqAdType, reqPosition }) => {
  // HR = CB * PF * TF * CTRF

  const CBRate = CB;
  let PFRate = PF[ad.adType] || PF["none"];

  if (reqPosition == "home") {
    PFRate = PF["home"];
  } else if (reqPosition == "core_listing") {
    PFRate = PF["core_listing"];
  } else if (reqPosition == "other_listing") {
    PFRate = PF["other_listing"];
  } else if (reqPosition == "blog" && reqAdType == "sidebar") {
    PFRate = PF["blog_sidebar"];
  } else if (reqPosition == "blog" && reqAdType == "bottom_banner") {
    PFRate = PF["blog_bottom"];
  }

  let TFRate = TF["all"];
  if (ad.targetCitySlug) {
    if (ad.adType == "core_listing") {
      TFRate = TF["city_core_listing"];
    } else if (ad.adType == "other_listing") {
      TFRate = TF["city_other_listing"];
    } else {
      TFRate = TF["city"];
    }
  } else if (ad.adType == "core_listing") {
    TFRate = TF["core_listing"];
  } else if (ad.adType == "other_listing") {
    TFRate = TF["other_listing"];
  }

  const CTRFRate = (100 - ad.ctr) / 100;

  const HR = CBRate * PFRate * TFRate * CTRFRate;

  return HR;
};

const calculateBS = (remainingBudget, highestRemainingBudget) => {
  // BS = remaining hearts / highest remaining hearts
  return remainingBudget / highestRemainingBudget;
};
