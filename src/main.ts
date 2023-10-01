const logger = (...data: any[]): boolean =>
	process.stdout.write(data.join(" ") + "\n");

logger("hello", "hii", 1);
