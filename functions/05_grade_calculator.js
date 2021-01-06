
let gradeCalc = function (studentScore, totalScore) {
    if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error(`Please provide numbers only.`)
    }
    
    let yourGrade = studentScore / totalScore * 100
    let gradeLetter = null
    if (yourGrade >= 90) {
        gradeLetter = `A`
    } else if (yourGrade >= 80) {
        gradeLetter = `B`
    } else if (yourGrade >= 70) {
        gradeLetter = `C`
    } else if (yourGrade >= 60) {
        gradeLetter = `D`
    } else if (yourGrade >= 0 && yourGrade <= 59) {
        gradeLetter = `F`
    }
    return `You got a ${gradeLetter} (${yourGrade}%)!`
}

try {
    let gradeTotal = gradeCalc(18, 20)
    console.log(gradeTotal)
} catch (e) {
    console.log(e.message)
}

