/*==================================================
  Modules
  ==================================================*/

  const _ = require('underscore');
  const chai = require('chai');
  const moment = require('moment');

  const args = require('../args');

  const categories = [
    'Derivatives',
    'DEXes',
    'Lending',
    'Payments',
    'Assets'
  ]

/*==================================================
  Test
  ==================================================*/

  _.each(args.projects, (project) => {
    describe(`${project.slug} project export format`, () => {
      it('has a valid name', () => {
        chai.assert.isString(project.name);
      });
      it('categoy matches one of the defined options', () => {
        chai.expect(project.category).to.be.oneOf(categories);
      });
      it('has a valid start time', () => {
        chai.expect(project.start).to.be.at.most(moment().utcOffset(0).unix(), 'unix start time must be less than the current time')
      });
      it('should have a run method', () => {
        chai.assert.isFunction(project.run);
      });
    });
  });

