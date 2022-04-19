export class Member {
    public memberId: number;
    public name: string;
    public salary: number;
    public guild: string;
    constructor(memberId: number, name: string, salary: number, guild: string) {
        this.memberId = memberId;
        this.name = name;
        this.salary = salary;
        this.guild = guild;
    }
}
