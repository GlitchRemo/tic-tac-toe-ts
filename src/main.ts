const myLog = (...data: any[]): boolean =>
	process.stdout.write(data.join(" ") + "\n");

myLog("hello", "hii", 1);
