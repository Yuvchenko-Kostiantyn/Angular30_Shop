let i = 0;
export function* genId(): Generator<number> {
    yield ++i;
}
