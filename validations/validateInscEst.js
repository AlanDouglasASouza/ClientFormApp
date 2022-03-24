const validateInscEst = (insc) => {
    const inscEst = insc;
    if (inscEst.length > 14 || inscEst.length < 8) {
        return false;
    }
    return true;
}
export default validateInscEst;