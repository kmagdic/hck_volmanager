export const calcOIB = (s: string): string => {
  if (s.length < 10) {
    return '';
  }
  var a = 0;
  for(var i = 0; i < 10; i++) {
    if (s[i] < '0' || s[i] > '9') {
      return '';
    }
    a += Number.parseInt(s[i]);
    a %= 10;
    if (!a) {
      a = 10;
    }
    a *= 2;
    a %= 11;
  }
  var cnumber = 11 - a;
  if (cnumber === 10) {
    cnumber = 0;
  }
  return cnumber.toString();
};

export const checkOIB = (s: string): boolean => (s.length == 11) && (calcOIB(s) == s[10]);

/*
  if (s.length != 11) {
    return false;
  }
  return calcOIB(s) == s[11];
};
*/
/*
create or replace function hck.calc_oib(s text)
 returns text
 language plpgsql
as $function$
declare
  i int;
  a int := 10;
  c text;
  cnumber int;
begin
  if length(s) < 10 then
    return '';
  end if;
  for i in 1..10 loop
    c := substr(s, i, 1);
    if c < '0' or c > '9' then
      return '';
    end if;
    a := a + c::int;
    a := a % 10;
    if a = 0 then
      a := 10;
    end if;
    a := a * 2;
    a := a % 11;
  end loop;
  cnumber := 11 - a;
  if cnumber = 10 then
    cnumber := 0;
  end if;
  return cnumber::text;
end;
$function$
;

create or replace function hck.check_oib(s text)
 returns boolean
 language plpgsql
as $function$
begin
  if length(s) != 11 then
    return false;
  end if;
  return hck.calc_oib(s) = substr(s, 11, 1);
end;
$function$
;
*/