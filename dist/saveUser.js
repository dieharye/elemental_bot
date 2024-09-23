"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = addUser;
const fs_1 = require("fs");
const path = './users.json';
// Function to add a new user
function addUser(newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Step 1: Read the existing users from the JSON file
            const data = yield fs_1.promises.readFile(path, 'utf8');
            let users = [];
            if (data) {
                users = JSON.parse(data);
            }
            // Step 2: Check if the user already exists
            const userExists = users.some(user => user.id === newUser.id);
            if (userExists) {
                console.log('User already exists!');
                return;
            }
            // Step 3: Add the new user
            users.push(newUser);
            // Step 4: Write the updated users list back to the file
            yield fs_1.promises.writeFile(path, JSON.stringify(users, null, 2), 'utf8');
            console.log('New user added successfully!');
        }
        catch (err) {
            console.error('Error:', err);
        }
    });
}
