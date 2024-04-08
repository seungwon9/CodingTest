function solution(nums) {
    const maxSelect = nums.length / 2;
    const pokemonTypes = new Set(nums);
    const uniqueTypes = pokemonTypes.size;

    return Math.min(maxSelect, uniqueTypes);
}