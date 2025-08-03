const { Employee } = require("../models");
const { op } = require("sequelize");

class EmployeeController {
  static async getEmployee(req, res) {
    try {
      let = employees = await Employee.findAll();
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async addEmployee(req, res) {
    try {
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async searchEmployee(req, res) {
    try {
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getEmployeeById(req, res) {
    try {
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async editEmployee(req, res) {
    try {
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async deleteEmployee(req, res) {
    try {
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = EmployeeController;
