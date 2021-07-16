  ConverRectToPolygon(rect, rotation = 0) {
    var polygons = [];
    //1
    var pointX = Math.floor(rect.x);
    var pointY = Math.floor(rect.y);
    var point = new PIXI.Point(pointX, pointY);
    polygons.push(point);

    //2
    pointX = Math.floor(rect.x + rect.width);
    pointY = Math.floor(rect.y);
    point = new PIXI.Point(pointX, pointY);
    polygons.push(point);

    //3
    pointX = Math.floor(rect.x + rect.width);
    pointY = Math.floor(rect.y + rect.height);
    point = new PIXI.Point(pointX, pointY);
    polygons.push(point);

    //4
    pointX = Math.floor(rect.x);
    pointY = Math.floor(rect.y + rect.height);
    point = new PIXI.Point(pointX, pointY);
    polygons.push(point);

    //1
    pointX = Math.floor(rect.x);
    pointY = Math.floor(rect.y);
    point = new PIXI.Point(pointX, pointY);
    polygons.push(point);

    if (rotation != 0) {
      //anchor point
      pointX = Math.floor(rect.x + rect.width / 2);
      pointY = Math.floor(rect.y + rect.height / 2);
      var anchorPoint = new PIXI.Point(pointX, pointY);

      var polygonsRotated = [];
      for (var i = 0; i < polygons.length; i++) {
        polygonsRotated.push(this.GetRotatePoint(polygons[i], anchorPoint, rotation));
      }
      return polygonsRotated;
    } else {
      return polygons;
    }
  }

  GetRotatePoint(point, anchorPoint, rotation) {
    var cosAngle = Math.cos(rotation);
    var sinAngle = Math.sin(rotation);
    var dx = point.x - anchorPoint.x;
    var dy = point.y - anchorPoint.y;

    var newPointX = anchorPoint.x + Math.floor(dx * cosAngle - dy * sinAngle);
    var newPointY = anchorPoint.y + Math.floor(dx * sinAngle + dy * cosAngle);
    var pointRotated = new PIXI.Point(newPointX, newPointY);
    return pointRotated;
  }

  Collision2Polygon(polygon1, polygon2) {
    var count1 = polygon1.length;
    var count2 = polygon2.length;
    for (var i = 0, j = count1 - 1; i < count1; j = i, i += 1) {
      //line of polygon1
      var xi = polygon1[i].x,
        yi = polygon1[i].y;
      var xj = polygon1[j].x,
        yj = polygon1[j].y;

      for (var k = 0, h = count2 - 1; k < count2; h = k, k += 1) {
        //line of polygon2
        var xk = polygon2[k].x,
          yk = polygon2[k].y;
        var xh = polygon2[h].x,
          yh = polygon2[h].y;

        if (this.TwoLineIntersects(xi, yi, xj, yj, xk, yk, xh, yh)) {
          return true;
        }
      }
    }
    return false;
  }

  // returns true if the line from (a,b)->(c,d) intersects with (p,q)->(r,s)
  TwoLineIntersects(a, b, c, d, p, q, r, s) {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
      return false;
    } else {
      lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
      gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
      return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
    }
  }

