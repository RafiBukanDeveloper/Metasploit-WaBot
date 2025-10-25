const RafiGanteng = {
    command: ['ping'],
    help: ['ping'],
    tags: ['run'],
    async code(m) {
        const start = new Date().getTime();
        const end = new Date().getTime();

        const responseTime = end - start

        m.reply(Styles(`Duarrrrrrr!!\nResponse time: ${responseTime}ms`));
    }
};

module.exports = RafiGanteng;
