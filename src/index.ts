export {};

// An index signature parameter type cannot be a literal type or a generic type

// EXAMPLE 1 - Use mapped types to solve the error

enum EmailStatus {
  Read = 'READ',
  Unread = 'UNREAD',
  Draft = 'DRAFT',
}

// 👇️ make sure you use type here (not interface)
type Status = {
  [key in EmailStatus]: string;
};

// ---------------------------------------------------

// // EXAMPLE 2 - Using mapped types with a union type

// type EmailStatuses = 'Read' | 'Unread' | 'Draft';

// // 👇️ make sure you use type here (not interface)
// type StatusFromUnion = {
//   [key in EmailStatuses]: string;
// };

// ---------------------------------------------------

// // EXAMPLE 3 - Use the `Record` utility type to solve the error

// // 👇️ Using Enums
// enum EmailStatus {
//   Read = 'READ',
//   Unread = 'UNREAD',
//   Draft = 'DRAFT',
// }

// type Status = Record<EmailStatus, string>;

// ---------------------------------------------------

// // EXAMPLE 4 - Using `Record` with a union type

// // 👇️ Using Union type
// type EmailStatuses = 'Read' | 'Unread' | 'Draft';

// type StatusFromUnion = Record<EmailStatuses, string>;
