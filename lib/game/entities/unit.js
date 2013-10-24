ig.module(
  'game.entities.unit'
)
.requires(
  'impact.entity'
)
.defines(function(){

EntityUnit = ig.Entity.extend({

  selected: false,

  size: { x: 64, y: 64 },
  
  animSheet: new ig.AnimationSheet( 'media/units/mech.png', 64, 64 ),
  
  init: function( x, y, settings ) {
    this.parent( x, y, settings );
    
    this.addAnim( 'idle', 1, [0] );
  },

  update: function() {
    if (ig.input.pressed('left-click')) {
      this.selected = this.within();
      console.log(this.selected);
    }
    if (ig.input.pressed('right-click')) {
      if (this.selected) {
        this.pos.x = ig.input.mouse.x - this.size.x/2;
        this.pos.y = ig.input.mouse.y - this.size.y/2;
        this.selected = false;
      }
    }
    this.parent();
  },

  within: function() {
    return this.pos.x < ig.input.mouse.x && ig.input.mouse.x < this.pos.x + this.size.x && this.pos.y < ig.input.mouse.y && ig.input.mouse.y < this.pos.y + this.size.y;
  }
});

});