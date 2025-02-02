module.exports = ({ Config }) => {
	// To enable this addon, simply comment out the line below.

	const disableCrashers = false;

	// there is no `ENEMY_CAP`, so we are "reconstructing them"
	Config.ENEMY_CAP_NEST = 0;

	// Constructs a four-dimensional array of shape types
	Config.FOOD_TYPES = Array(3).fill().map((_, i, a) => [
		// Chance of spawning in exponents of 4
		4 ** (a.length - i),
		// 4-wide dimension of the 4 shape tiers - regular, beta, alpha, omega
		Array(4).fill().map((_, j, b) => [
			// Chance of spawning in exponents of 5
			5 ** (b.length - j),
			// 6-wide dimension of the 6 shiny modifiers
			Array(6).fill().map((_, k, c) => [
				// Chance of spawning, set to 200mil for regular polygons and exponents of 10 otherwise
				k ? 10 ** (c.length - k - 1) : 200_000_000,

				disableCrashers ? // no crashers
					`laby_${j}_${i}_${k}_0`
				: // 2-wide dimension of the 2 shape "ranks" - normal, crasher
					[[24, `laby_${j}_${i}_${k}_0`], [1, `laby_${j}_${i}_${k}_1`]]
			])
		])
	]);

	// 2-wide dimension of the 2 base shape types - pentagon, hexagon
	Config.FOOD_TYPES_NEST = Array(2).fill().map((_, i, a) => [
		// Chance of spawning in exponents of 4
		4 ** (a.length - i),
		// 4-wide dimension of the 4 shape tiers - regular, beta, alpha, omega
		Array(4).fill().map((_, j, b) => [
			// Chance of spawning in exponents of 5
			5 ** (b.length - j),
			// 6-wide dimension of the 6 shiny modifiers
			Array(6).fill().map((_, k, c) => [
				// Chance of spawning, set to 200mil for regular polygons and exponents of 10 otherwise
				k ? 10 ** (c.length - k - 1) : 200_000_000,

				disableCrashers ? // no crashers
					`laby_${i+3}_${j}_${k}_0`
				: // 2-wide dimension of the 2 shape "ranks" - normal, crasher
					[[24, `laby_${i+3}_${j}_${k}_0`], [1, `laby_${i+3}_${j}_${k}_1`]]
			])
		])
	]);

	console.log('[labyFood.js] Using Labyrinth Food.');

	// Define shapes with Class
	const shapes = ['triangle', 'pentagon', 'hexagon'];
	const tiers = ['normal', 'beta', 'alpha', 'omega', 'delta'];
	const rarities = ['normal', 'rare', 'epic', 'legendary', 'trans'];

	shapes.forEach((shape, i) => {
		tiers.forEach((tier, j) => {
			rarities.forEach((rarity, k) => {
				Class[`laby_${shape}_${tier}_${rarity}`] = {
					PARENT: "drone",
					PROPS: [
						{
							POSITION: [10, 0, 0, 180, 1],
							TYPE: [shape, {COLOR: -1}],
						},
					]
				};
			});
		});
	});
};
