export const signals = ["SIGINT", "SIGTERM", "SIGHUP"] as const;
export const TRUE = "true";
export const excludedFields = ["page", "limit", "sort", "fields"] as const;
export const operatorsMap = {
  ">": "$gt",
  ">=": "$gte",
  "=": "$eq",
  "<": "$lt",
  "<=": "$lte",
};
export const NUM_FILTER_REGEX = /\b(<|>|>=|=|<|<=)\b/g;
export const NUM_FILTER_SEPARATOR = "-";
