function solution(start, finish)
{
    const shelves = finish - start;
    return Math.floor(shelves / 3) + shelves % 3;
}