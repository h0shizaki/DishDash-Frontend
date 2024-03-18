export interface TextSuggestion{
    candidates: Candidate[],
    text: string
}

export interface Candidate {
    freq: number,
    score: number,
    text: string
}