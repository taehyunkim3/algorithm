function solution(priorities, location) {
    let queue = priorities.map((priority, index) => {
        return {
            index: index,
            priority: priority
        };
    });

    let order = 0;
    while (true) {
        let currentProcess = queue.shift();
        if (queue.some(process => process.priority > currentProcess.priority)) {
            queue.push(currentProcess);
        } else {
            order++;
            if (currentProcess.index === location) {
                return order;
            }
        }
    }
}
