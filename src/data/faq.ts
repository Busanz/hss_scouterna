import type { CategoryType, FaqItemType } from "@/types/types";

export const categories: string[] = [
  "categories.all",
  "categories.policy",
  "categories.general",
  "categories.other",
];

export const faqData: FaqItemType[] = [
  {
    question: "membershipfee.question",
    answer: "membershipfee.answer",
    category: "membershipfee.category" as CategoryType,
  },
  {
    question: "leader.question",
    answer: "leader.answer",
    category: "leader.category" as CategoryType,
  },
  {
    question: "invoiceaddress.question",
    answer: "invoiceaddress.answer",
    category: "invoiceaddress.category" as CategoryType,
  },
  {
    question: "activities.question",
    answer: "activities.answer",
    category: "activities.category" as CategoryType,
  },
  {
    question: "registration.question",
    answer: "registration.answer",
    category: "registration.category" as CategoryType,
  },
  {
    question: "scoutmethod.question",
    answer: "scoutmethod.answer",
    category: "scoutmethod.category" as CategoryType,
  },
  {
    question: "provision.question",
    answer: "provision.answer",
    category: "provision.category" as CategoryType,
  },
  {
    question: "gdpr.question",
    answer: "gdpr.answer",
    category: "gdpr.category" as CategoryType,
  },
  {
    question: "contact.question",
    answer: "contact.answer",
    category: "contact.category" as CategoryType,
  },
  {
    question: "cancellation.question",
    answer: "cancellation.answer",
    category: "cancellation.category" as CategoryType,
  },
];
