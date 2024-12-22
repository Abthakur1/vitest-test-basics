import sum from "./sum";
import {describe, expect, it, test} from "vitest";

describe("#sum", ()=>{
    it('returns 0 with no numbers', ()=>{
        expect(sum()).toBe(0);
    })
    it('returns some numbers with 1 number', ()=>{
        expect(sum(2)).toBe(2);
    })
    it('returns some numbers with more numbers', ()=>{
        expect(sum(2,5,6)).toBe(13);
    })
})