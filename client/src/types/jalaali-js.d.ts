// src/types/jalaali-js.d.ts

declare module 'jalaali-js' {
    /**
     * Converts a Jalaali year/month/day into Julian Day Number
     */
    export function j2d(year: number, month: number, day: number): number;
  
    /**
     * Converts a Julian Day Number to Gregorian year/month/day
     */
    export function d2g(day: number): { gy: number; gm: number;   gd: number}
  
    /**
     * Converts Jalaali to Gregorian date
     */
    export function toGregorian(year: number, month: number, day: number): { gy: number; gm: number; gd: number}
  
    /**
     * Converts Gregorian to Jalaali date
     */
    export function toJalaali(year: number, month: number, day: number): { gy: number; gm: number;   gd: number}
  
    // Add other exports if needed
  }