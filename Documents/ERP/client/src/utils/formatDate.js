import { format, parseISO } from "date-fns";

export const formatDate = (date, pattern = "dd MMM yyyy") =>
  format(typeof date === "string" ? parseISO(date) : date, pattern);

export const formatDateTime = (date) => formatDate(date, "dd MMM yyyy, hh:mm a");
