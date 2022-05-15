interface MajorCredits {
    credits: number;
    brand: "major";
}

interface MinorCredits {
    credits: number;
    brand: "minor";
}

function sumMajorCredits (subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const sum = subject1.credits + subject2.credits;
    const major = {
        credits: sum
    } as MajorCredits;
    return major;
}

function sumMinorCredits (subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const sum = subject1.credits + subject2.credits;
    const minor = {
        credits: sum
    } as MinorCredits;
    return minor;
}
