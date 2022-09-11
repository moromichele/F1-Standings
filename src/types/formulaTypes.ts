import { StringMappingType } from "typescript";

export type Driver = {
    code?: string;
    permanentNumber?: string;
    dateOfBirth: string;
    driverId: string;
    familyName: string;
    givenName: string;
    nationality: string;
    url: string;
}

export type Constructor = {
    constructorId: string;
    name: string;
    nationality: string;
    url: string;
}

export type DriverStanding = {
    Constructors: Constructor[];
    Driver: Driver;
    points: string;
    position: string;
    positionText: string;
    wins: string;
}

export type ConstructorStanding = {
    Constructor: Constructor;
    points: string;
    position: string;
    positionText: string;
    wins: string;
}