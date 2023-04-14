export type OptionalKeys<Type, Keys extends keyof Type> = Omit<Type, Keys> & Partial<Pick<Type, Keys>>;
