(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function t(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function n(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var r={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},i={"home-dead-bug":{...r[`dead-bug`],id:`home-dead-bug`,equipment:[]},"home-side-plank":{...r[`side-plank`],id:`home-side-plank`,equipment:[]},"bird-dog":{id:`bird-dog`,name:`Bird Dog`,muscles:`Deep core, lower back, glutes`,equipment:[],setup:[`Kneel on all fours on a mat, towel, or carpet, with your hands under your shoulders and your knees under your hips.`,`Keep your back flat and your neck long, eyes on the floor.`],steps:[`Tighten your belly and slowly reach one arm forward and the opposite leg straight back.`,`Hold for a second without letting your hips tilt or your back sag.`,`Bring them back with control, then switch sides.`],mistakes:[`Arching your lower back as the leg lifts: only raise it as high as your back stays flat.`,`Rushing and swinging the arm and leg.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`KA0ekfSePrQ`,channel:`Tone and Tighten`},weightKind:`bodyweight`},"forearm-plank":{id:`forearm-plank`,name:`Forearm Plank`,muscles:`Abs, shoulders, glutes`,equipment:[],setup:[`Lie face down, then prop yourself up on your forearms with your elbows right under your shoulders.`,`Tuck your toes and lift your hips so your body makes one straight line.`],steps:[`Squeeze your glutes and brace your abs, as if bracing for a light punch.`,`Breathe steadily and hold. Stop when your form starts to slip.`,`Lower your knees to rest.`],mistakes:[`Letting your hips sag so your lower back arches.`,`Piking your hips up, which takes the work off your abs.`,`Holding your breath or craning your neck up.`],stress:{lowerBack:`moderate`,shoulders:`moderate`},video:{youtubeId:`gSDNblPRh1U`,channel:`Masterpiece Training`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"home-glute-bridge":{id:`home-glute-bridge`,name:`Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[],setup:[`Lie on your back with your knees bent and your feet flat on the floor, hip-width apart.`,`Rest your arms at your sides, palms down.`],steps:[`Press your lower back gently toward the floor, then push through your heels to lift your hips.`,`Stop when your shoulders, hips and knees make a straight line, and squeeze your glutes.`,`Lower slowly.`],mistakes:[`Lifting so high that your lower back arches: the lift should come from your glutes.`,`Pushing through your toes instead of your heels.`],stress:{},video:{youtubeId:`evOnUDkq9f4`,channel:`Girls Gone Strong`},weightKind:`bodyweight`},"bicycle-crunch":{id:`bicycle-crunch`,name:`Bicycle Crunch`,muscles:`Abs, obliques`,equipment:[],setup:[`Lie on your back with your hands lightly behind your head and your knees lifted.`,`Press your lower back gently into the floor.`],steps:[`Bring one elbow toward the opposite knee while you straighten the other leg.`,`Switch sides slowly, like pedaling a bike.`,`Keep your shoulders lifted off the floor the whole time.`],mistakes:[`Pulling on your neck with your hands: keep them light.`,`Going fast, which uses momentum instead of your abs.`,`Letting your lower back arch off the floor.`],stress:{neckUpperBack:`high`,lowerBack:`moderate`},video:{youtubeId:`eqg47ZuGZXQ`,channel:`UCLA Health`},weightKind:`bodyweight`},"mountain-climber":{id:`mountain-climber`,name:`Mountain Climber`,muscles:`Abs, shoulders, hips`,equipment:[],setup:[`Start in a high plank with your hands under your shoulders and your body in one straight line.`],steps:[`Drive one knee toward your chest, then switch legs, like running in place on the floor.`,`Keep your hips level and your core tight. Start slowly and speed up only if your form holds.`],mistakes:[`Hips bouncing up and down.`,`Letting your lower back sag.`,`Shoulders drifting behind your hands.`],stress:{knees:`high`,wrists:`moderate`,shoulders:`moderate`},video:{youtubeId:`gW-q50V6Z_0`,channel:`Born Fitness`},weightKind:`bodyweight`}},a={"chin-tuck":{id:`chin-tuck`,name:`Chin Tuck`,muscles:`Deep neck muscles`,equipment:[],setup:[`Sit or stand tall with your shoulders relaxed and your eyes looking straight ahead.`],steps:[`Slide your head straight back, as if making a double chin. Keep your chin level, not nodding down.`,`Hold for about 3 seconds, then relax.`,`Repeat slowly.`],mistakes:[`Tipping your chin down or up instead of sliding straight back.`,`Shrugging your shoulders or holding your breath.`,`Pushing into pain: go only as far as a gentle stretch.`],stress:{},video:{youtubeId:`h_1-7H0eOfo`,channel:`PhysioExercise`},weightKind:`bodyweight`},"open-book":{id:`open-book`,name:`Open Book`,muscles:`Upper back, chest, shoulders`,equipment:[],setup:[`Lie on your side with your knees bent and stacked, and your arms straight out in front with palms together.`],steps:[`Keeping your knees together, lift the top arm and open it toward the ceiling and behind you, letting your eyes follow your hand.`,`Pause for a breath, then bring it back slowly.`,`Do all your reps, then switch sides.`],mistakes:[`Letting your knees and hips roll back: the turn should come from your upper back.`,`Forcing your arm to the floor: stop where it feels comfortable.`],stress:{},video:{youtubeId:`917w2gqZwZQ`,channel:`Petroski Physio`},weightKind:`bodyweight`},"wall-slide":{id:`wall-slide`,name:`Wall Slide`,muscles:`Upper back, shoulders`,equipment:[],setup:[`Stand with your heels a few inches from a wall and press your head, upper back and hips against it.`,`Bend your elbows and rest your forearms and the backs of your hands on the wall, like a goalpost.`],steps:[`Slowly slide your arms up the wall as far as you can keep contact.`,`Slide them back down with control.`],mistakes:[`Arching your lower back or flaring your ribs to reach higher.`,`Letting your forearms leave the wall: go only as high as you can keep contact.`],stress:{shoulders:`moderate`},video:{youtubeId:`Eaj_NG5_hIo`,channel:`British Elbow & Shoulder Society`},weightKind:`bodyweight`},"cat-cow":{id:`cat-cow`,name:`Cat-Cow`,muscles:`Spine, hips`,equipment:[],setup:[`Get on your hands and knees, with your hands under your shoulders and your knees under your hips.`,`Put a folded towel or mat under your knees if the floor is hard.`],steps:[`Breathe in and let your belly drop as you gently lift your chest and tailbone.`,`Breathe out and round your back toward the ceiling, tucking your chin and tailbone.`,`Move slowly, letting your breath lead.`],mistakes:[`Forcing a bigger arch than feels good.`,`Rushing: let each breath lead the movement.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`xyNwxiuERXc`,channel:`FIT.nl`},weightKind:`bodyweight`},"figure-four-stretch":{id:`figure-four-stretch`,name:`Figure-4 Stretch`,muscles:`Glutes, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat.`,`Cross one ankle over the opposite knee to make a 4.`],steps:[`Keep your head and shoulders relaxed on the floor.`,`For more stretch, hold behind the lower thigh and draw it gently toward your chest.`,`Hold, breathing slowly, then switch sides.`],mistakes:[`Forcing the knee down.`,`Lifting your head or tensing your shoulders.`,`Stretching into sharp pain or tingling down your leg: stop if that happens.`],stress:{},video:{youtubeId:`PiJ_5AXTLOw`,channel:`Rapid Fitness`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"supine-twist":{id:`supine-twist`,name:`Lying Twist`,muscles:`Lower back, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat, arms out to the sides.`],steps:[`Let both knees fall slowly to one side while your shoulders stay on the floor.`,`Hold, breathing slowly, then bring them back and switch sides.`],mistakes:[`Letting the opposite shoulder lift off the floor.`,`Twisting past where it feels good: a pillow under your knees helps.`],stress:{},video:{youtubeId:`mNdJti7ZwKI`,channel:`Vive Health`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}}},o={...r,...i,...a},s={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]},home:{title:`At-home abs — no equipment`,slots:[{label:`Deep core`,options:[`home-dead-bug`]},{label:`Back side`,options:[`bird-dog`]},{label:`Front core`,options:[`forearm-plank`,`home-dead-bug`]},{label:`Obliques`,options:[`home-side-plank`]},{label:`Hips`,options:[`home-glute-bridge`]},{label:`Lower abs`,options:[`bicycle-crunch`,`forearm-plank`]},{label:`Challenge`,options:[`mountain-climber`,`bicycle-crunch`]}]},mobility:{title:`Mobility reset — neck, upper back, hips`,slots:[{label:`Neck`,options:[`chin-tuck`]},{label:`Upper back`,options:[`open-book`]},{label:`Shoulders`,options:[`wall-slide`]},{label:`Spine`,options:[`cat-cow`,`supine-twist`]},{label:`Hips`,options:[`figure-four-stretch`]},{label:`Lower back`,options:[`supine-twist`,`cat-cow`]}]}},c=[`push`,`pull`,`legs`,`home`,`mobility`],l=[`push`,`pull`,`legs`,`home`],u=[`push`,`pull`,`legs`],d={new:4,some:5,experienced:7},f=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,p={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:f},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:f},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:f},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:f}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function m(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function h(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var g={new:{sets:2,repMin:10,repMax:12,restSeconds:45,tip:`Go slowly: quality matters more than speed.`},some:{sets:3,repMin:10,repMax:15,restSeconds:45,tip:`Go slowly and keep your lower back steady.`},experienced:{sets:3,repMin:12,repMax:20,restSeconds:30,tip:`Keep tension in your abs the whole time.`}},_={sets:2,repMin:8,repMax:10,restSeconds:15,tip:`Move slowly and stop short of any pain.`},v=`One light set of your first exercise at about half your usual weight.`,y={mobility:[`Take 5 slow breaths: in through your nose, out through your mouth, shoulders relaxed.`],home:[`Cat-cow on the floor: 10 slow reps, staying in a pain-free range.`,`Pelvic tilts: on your back with knees bent, gently flatten your lower back to the floor and release, 10 reps.`],push:[`Arm circles: 10 forward, then 10 backward.`,`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,v],pull:[`Arm circles: 10 forward, then 10 backward.`,`Shoulder rolls: 10 slow rolls backward.`,v],legs:[`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,`Hip circles: hands on hips, 10 slow circles each way.`,`Bodyweight glute bridges: 10 slow reps on a mat.`,v]},b={mobility:[`Lie on your back with your knees bent and take 5 slow, deep belly breaths.`],home:[`Child's pose: sit back on your heels with your arms reaching forward and breathe slowly for 30 seconds.`,`Lying twist: on your back, let both knees fall to one side for 20–30 seconds. Each side.`,`Slow breathing: lie on your back and take 5 slow, deep belly breaths.`],push:[`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`],pull:[`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`],legs:[`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`]},x={neckUpperBack:[`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`],lowerBack:[`Knees to chest: on your back, hug both knees in gently and breathe slowly.`]},S={neckUpperBack:[`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`],lowerBack:[`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`],knees:[`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`]},C={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function w(e,t){return e.equipment.every(e=>t.has(e))}function T(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function E(e,t){return t.some(t=>e.stress[t]===`high`)}function D(e,t,n,r){return e.options.map(e=>o[e]).filter(e=>!r.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>w(e,n)).filter(e=>!E(e,t.protectedAreas)).sort((e,n)=>T(e,t.protectedAreas).length-T(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:T(n,t.protectedAreas)}))}function O(e,t,n,r){return D(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function k(e,t,n){return e===`mobility`?y.mobility:e===`home`?[`2 minutes of marching in place to warm up.`,...t.protectedAreas.includes(`neckUpperBack`)?S.neckUpperBack??[]:[],...y.home]:[n?`5 minutes on the stationary bike at an easy pace.`:`5 minutes of brisk walking to warm up.`,...t.protectedAreas.flatMap(e=>S[e]??[]),...y[e]]}function A(e,t){return e===`home`?g[t.experience]:e===`mobility`?_:p[t.goal][t.experience]}function ee(e,t){return e===`mobility`?b.mobility:[...b[e],...t.protectedAreas.flatMap(e=>x[e]??[])]}function te(e,t,n){let r=new Set(n),i=s[e],a=e===`mobility`?i.slots.length:d[t.experience],o=i.slots.slice(0,a),c=new Set,l=[];for(let e of o){let[n]=D(e,t,r,c);n&&(c.add(n.exercise.id),l.push(n))}let u=k(e,t,r.has(`bike`)),f=ee(e,t);return{day:e,title:i.title,prescription:A(e,t),warmUp:u,exercises:l,coolDown:f}}var j={push:`Push`,pull:`Pull`,legs:`Legs + Abs`,home:`At-home abs`,mobility:`Mobility reset`},M={push:`Push`,pull:`Pull`,legs:`Legs`,home:`Home`,mobility:`Reset`};function N(e){return u.includes(e)}function P(e){return N(e)?`Day ${u.indexOf(e)+1}`:`No gym`}function ne(e){return N(e)?`${P(e)} ${j[e]}`:j[e]}function F(e,t){return N(e)?`${P(e)} · ${t}`:t}function re(e,t,n=c){return`<nav class="day-tabs" aria-label="${t}">${n.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        <small class="day-number">${P(t)}</small>${j[t]}
      </button>`).join(``)}</nav>`}function ie(e){return`https://www.youtube.com/watch?v=${e}`}function ae(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function oe(e){return e.cautionAreas.map(e=>`<p class="caution">${C[e]}</p>`).join(``)}function se(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`;return`
    <h3>Set up</h3>
    ${n(t.setup)}
    <h3>How to do it</h3>
    ${n(t.steps)}
    <h3>Avoid</h3>
    ${ae(t.mistakes,`mistakes`)}
    <a class="demo-link" href="${ie(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>
  `}function I(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function ce(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}var le=`https://ashnasahni.github.io/gym-guide/`,ue={time:`18:00`,minutes:60},de=[30,45,60,90,120],fe=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`];function pe(e){return/^([01]\d|2[0-3]):[0-5]\d$/.test(e)}function me(e){return{time:e?.time!==void 0&&pe(e.time)?e.time:ue.time,minutes:e?.minutes!==void 0&&de.includes(e.minutes)?e.minutes:ue.minutes}}function L(e){return String(e).padStart(2,`0`)}function he(e){return`${`${e.getFullYear()}${L(e.getMonth()+1)}${L(e.getDate())}`}T${L(e.getHours())}${L(e.getMinutes())}00`}function ge(e){return`${`${e.getUTCFullYear()}${L(e.getUTCMonth()+1)}${L(e.getUTCDate())}`}T${L(e.getUTCHours())}${L(e.getUTCMinutes())}${L(e.getUTCSeconds())}Z`}function _e(e){return e.replace(/\\/g,`\\\\`).replace(/;/g,`\\;`).replace(/,/g,`\\,`).replace(/\r?\n/g,`\\n`)}function ve(e){let t=new TextEncoder,n=[],r=``,i=0,a=75;for(let o of e){let e=t.encode(o).length;i+e>a&&(n.push(r),r=``,i=0,a=74),r+=o,i+=e}return n.push(r),n.join(`\r
 `)}function ye(e){return u.includes(e)?`${j[e]} day`:j[e]}function be(e,n,r){let[i,a]=r.split(`:`).map(Number),o=t(e,(n-(e.getDay()+6)%7+7)%7);return o.setHours(i,a,0,0),o<=e?t(o,7):o}function xe(e,t,n){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Weekly plan//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,...e.flatMap((e,r)=>{if(!e)return[];let i=be(n,r,t.time),a=new Date(i.getTime()+t.minutes*6e4);return[`BEGIN:VEVENT`,`UID:gym-guide-${r}@ashnasahni.github.io`,`DTSTAMP:${ge(n)}`,`DTSTART:${he(i)}`,`DTEND:${he(a)}`,`RRULE:FREQ=WEEKLY;BYDAY=${fe[r]}`,`SUMMARY:${_e(ye(e))}`,`DESCRIPTION:${_e(`${s[e].title}\nOpen Gym Guide: ${le}`)}`,`END:VEVENT`]}),`END:VCALENDAR`].map(ve).join(`\r
`)+`\r
`}var Se=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],Ce=Se.map(e=>e.id),we={easyWeeks:[],dismissedWeek:null},Te=6048e5;function R(t){return e(n(t))}function Ee(e){return n(new Date(e.getTime()-Te+432e5))}function De(e,t){return e.easyWeeks.includes(R(t))}function Oe(t,r,i){let a=new Map;for(let e of t){let t=R(new Date(e.date));a.set(t,(a.get(t)??0)+1)}let o=n(r);if(i.includes(e(o)))return 0;let s=0;for((a.get(e(o))??0)>=2&&(s+=1);;){o=Ee(o);let t=e(o);if(i.includes(t)||(a.get(t)??0)<2)return s;s+=1}}function ke(e,t,n){return De(n,t)||n.dismissedWeek===R(t)?!1:Oe(e,t,n.easyWeeks)>=6}function Ae(e,t){let n=R(t);return{...e,easyWeeks:e.easyWeeks.includes(n)?e.easyWeeks:[...e.easyWeeks,n]}}function je(e,t){let n=R(t);return{...e,easyWeeks:e.easyWeeks.filter(e=>e!==n)}}function Me(e,t){return{...e,dismissedWeek:R(t)}}var Ne={waterGoal:8,proteinGoal:null,calorieGoal:null,days:{}},Pe=6e3,Fe=3e3,Ie=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}],Le=[{name:`2 eggs`,kcal:140},{name:`Roti (1)`,kcal:100},{name:`Rice (1 cup cooked)`,kcal:205},{name:`Dal / lentils (1 cup)`,kcal:230},{name:`Banana`,kcal:105},{name:`Greek yogurt (1 cup)`,kcal:130},{name:`Paneer (100 g)`,kcal:265},{name:`Chicken breast (palm-size)`,kcal:165},{name:`Protein shake (1 scoop)`,kcal:120},{name:`Peanut butter (2 tbsp)`,kcal:190},{name:`Oats (1 cup cooked)`,kcal:150},{name:`Milk (1 glass)`,kcal:150}];function z(e,t){let n=e.days[t]??{};return{glasses:n.glasses??0,protein:n.protein??[],calories:n.calories??[]}}function B(e,t,n){return{...e,days:{...e.days,[t]:n}}}function Re(e,t,n){let r=z(e,t);return B(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function ze(e,t,n){let r=z(e,t);return B(e,t,{...r,protein:[...r.protein,n]})}function Be(e,t,n){let r=z(e,t);return B(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function Ve(e,t,n){let r=z(e,t);return B(e,t,{...r,calories:[...r.calories,n]})}function He(e,t,n){let r=z(e,t);return B(e,t,{...r,calories:r.calories.filter((e,t)=>t!==n)})}function Ue(e){return e.calories.reduce((e,t)=>e+t.kcal,0)}function We(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isInteger(n)||n<=0||n>Fe?`Enter the calories as a whole number, between 1 and ${Fe}.`:null}function Ge(e){let t=Number(e);return e.trim()===``||!Number.isInteger(t)||t<500||t>6e3?`Enter a calorie goal as a whole number, between 500 and ${Pe}.`:null}function Ke(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function qe(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}var Je=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],Ye=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],Xe=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],V={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:[`push`,null,`pull`,null,`legs`,null,null]};function Ze(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=u[n%u.length]}),t}function Qe(e){let{gymDays:t,...n}=e,r={...V,...n};if(!n.weekPlan&&Array.isArray(t)){let e=Ze(t);e.some(Boolean)&&(r.weekPlan=e)}return r}var $e=[`lb`,`kg`],et=2.2046226218;function H(e,t){return t===`kg`?Math.round(e/et*2)/2:e}function tt(e,t){return t===`kg`?Math.round(e*et*100)/100:e}function U(e){return Number.isInteger(e)?String(e):e.toFixed(1)}function nt(e,t){return`${U(H(e,t))} ${t}`}function rt(e){return e===`kg`?2.5:5}function it(e){return e===`kg`?`kilograms`:`pounds`}var at=`gymGuide.v1`;function ot(){return{profile:null,equipmentIds:[...Ce],equipmentConfirmed:!1,history:{},session:null,nutrition:Ne,workoutLog:[],calendar:ue,recovery:[],lastBackupAt:null,weightUnit:`lb`,deload:{...we,easyWeeks:[]}}}var st=5e3,ct=50,lt=60,ut=/^[A-Za-z0-9][A-Za-z0-9_-]{0,59}$/,dt=/^\d{4}-\d{2}-\d{2}$/;function W(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function ft(e){return typeof e==`string`&&ut.test(e)}function G(e,t,n){return typeof e==`number`&&Number.isFinite(e)&&e>=t&&e<=n}function K(e,t,n){return G(e,t,n)&&Number.isInteger(e)}function pt(e){return typeof e==`string`&&e.length<=40&&!Number.isNaN(Date.parse(e))}function mt(e){return typeof e==`string`&&dt.test(e)&&!Number.isNaN(Date.parse(e))}function q(e){return Array.isArray(e)?e.slice(0,st):[]}function ht(e){if(!W(e))return null;let t=e.weight===null?null:G(e.weight,0,1e3)?e.weight:void 0;return t===void 0||!G(e.amount,0,1e4)?null:{weight:t,amount:e.amount}}function gt(e){let t={};if(!W(e))return t;for(let[n,r]of Object.entries(e)){if(!ft(n))continue;let e=[];for(let t of q(r)){if(!W(t)||!pt(t.date))continue;let n=q(t.sets).slice(0,ct).map(ht).filter(e=>e!==null);e.push({date:t.date,sets:n})}e.length>0&&(t[n]=e)}return t}function _t(e){let t=c;return q(e).flatMap(e=>W(e)&&pt(e.date)&&typeof e.day==`string`&&t.includes(e.day)?[{date:e.date,day:e.day}]:[])}function vt(e){return q(e).flatMap(e=>{if(!W(e)||!mt(e.date)||!K(e.feel,1,5))return[];let t=e.hours===null?null:G(e.hours,0,24)?e.hours:null,n=e.readiness===null?null:G(e.readiness,0,100)?e.readiness:null;return[{date:e.date,feel:e.feel,hours:t,readiness:n}]})}function yt(e){if(typeof e!=`string`)return null;let t=e.trim().slice(0,lt);return t===``?null:t}function bt(e){let t=W(e)?e:{},n=q(t.protein).flatMap(e=>{let t=W(e)?yt(e.name):null;return W(e)&&t&&G(e.grams,0,300)?[{name:t,grams:e.grams}]:[]}),r=q(t.calories).flatMap(e=>{let t=W(e)?yt(e.name):null;return W(e)&&t&&G(e.kcal,0,3e3)?[{name:t,kcal:e.kcal}]:[]});return{glasses:K(t.glasses,0,100)?t.glasses:0,protein:n,calories:r}}function xt(e){let t=W(e)?e:{},n={};if(W(t.days))for(let[e,r]of Object.entries(t.days))mt(e)&&(n[e]=bt(r));return{waterGoal:K(t.waterGoal,1,20)?t.waterGoal:Ne.waterGoal,proteinGoal:K(t.proteinGoal,1,400)?t.proteinGoal:null,calorieGoal:K(t.calorieGoal,500,6e3)?t.calorieGoal:null,days:n}}function St(e){let t=c;return!Array.isArray(e)||e.length!==7?[...V.weekPlan]:e.map(e=>typeof e==`string`&&t.includes(e)?e:null)}function Ct(e){if(!W(e))return null;let t=Qe(e),n=Je.map(e=>e.id),r=Ye.map(e=>e.id),i=Xe.map(e=>e.id);return{goal:n.includes(t.goal)?t.goal:V.goal,experience:r.includes(t.experience)?t.experience:V.experience,protectedAreas:q(t.protectedAreas).filter(e=>typeof e==`string`&&i.includes(e)),avoidedExerciseIds:q(t.avoidedExerciseIds).filter(ft),weekPlan:St(t.weekPlan)}}function wt(e){let t=W(e)?e:{};return{easyWeeks:q(t.easyWeeks).filter(mt).slice(-200),dismissedWeek:mt(t.dismissedWeek)?t.dismissedWeek:null}}function Tt(e,t={}){let n=ot();if(!W(e))return n;let r=e;return{profile:Ct(r.profile),equipmentIds:Array.isArray(r.equipmentIds)&&r.equipmentIds.every(e=>typeof e==`string`)?q(r.equipmentIds).filter(ft):n.equipmentIds,equipmentConfirmed:r.equipmentConfirmed===!0,history:gt(r.history),session:t.keepSession&&W(r.session)?r.session:null,nutrition:xt(r.nutrition),workoutLog:_t(r.workoutLog),calendar:me(W(r.calendar)?r.calendar:void 0),recovery:vt(r.recovery),lastBackupAt:pt(r.lastBackupAt)?r.lastBackupAt:null,weightUnit:$e.find(e=>e===r.weightUnit)??n.weightUnit,deload:wt(r.deload)}}function Et(){try{let e=localStorage.getItem(at);return e?Tt(JSON.parse(e),{keepSession:!0}):ot()}catch{return ot()}}function J(e){try{return localStorage.setItem(at,JSON.stringify(e)),!0}catch{return!1}}var Dt=`gym-guide`,Ot=1;function kt(t,n){let r={app:Dt,format:Ot,savedAt:n.toISOString(),state:{...t,session:null}};return{fileName:`gym-guide-backup-${e(n)}.json`,text:JSON.stringify(r,null,2)}}function At(e){if(e.length>5e6)return{ok:!1,error:`That file is too big to be a Gym Guide backup.`};let t;try{t=JSON.parse(e)}catch{return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`}}let n=t;if(typeof n!=`object`||!n||n.app!==Dt||typeof n.state!=`object`||n.state===null)return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`};if(n.format!==Ot)return{ok:!1,error:`That backup is from a different version of the app, so it can't be restored here.`};let r=Tt(n.state);return{ok:!0,state:r,summary:{workouts:r.workoutLog.length,savedAt:typeof n.savedAt==`string`?n.savedAt:null}}}function jt(e){return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function Mt(e,t,n){let r=e?`Last backup: ${jt(e)}.`:`You haven't made a backup yet.`,i=``;if(t.kind===`error`)i=`<p class="form-error" role="alert">${I(t.message)}</p>`;else if(t.kind===`confirm`){let{workouts:e,savedAt:n}=t.summary;i=`
      <p class="notice">This backup ${n?`from ${jt(n)} `:``}has ${e} finished ${e===1?`workout`:`workouts`}. Restoring replaces everything on this phone right now.</p>
      <div class="button-row">
        <button type="button" class="secondary" data-action="cancel-restore">Cancel</button>
        <button type="button" class="primary" data-action="confirm-restore">Replace my data</button>
      </div>`}return n?`
    <section class="card backup-card">
      <h2>Already used this app?</h2>
      <p class="hint">If you saved a backup file, restore it here to get your workouts, weights and settings back.</p>
      <button type="button" class="secondary" data-action="choose-backup">Restore from a backup</button>
      <input type="file" data-field="restore-file" hidden />
      ${i}
    </section>`:`
    <section class="card backup-card">
      <h2>Back up your data</h2>
      <p class="hint">Your workouts live only on this phone. Save a backup file now and then and keep it somewhere safe, like emailed to yourself or in Google Drive. It includes your profile and protected areas, so keep it private.</p>
      <p class="hint small">${r}</p>
      <button type="button" class="secondary" data-action="save-backup">Save a backup</button>
      <button type="button" class="link-button center" data-action="choose-backup">Restore from a backup</button>
      <input type="file" data-field="restore-file" hidden />
      ${i}
    </section>`}var Nt=0;function Pt(e,t){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.rate=1;let r=++Nt;n.onstart=()=>t?.onStart();let i=()=>{r===Nt&&t?.onEnd()};n.onend=i,n.onerror=i,window.speechSynthesis.speak(n)}function Ft(e,t,n){let r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e4)}function It(e){`vibrate`in navigator&&navigator.vibrate(e)}var Lt=null,Rt=!1;async function zt(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{Lt=await navigator.wakeLock.request(`screen`)}catch{Lt=null}}document.addEventListener(`visibilitychange`,()=>{Rt&&document.visibilityState===`visible`&&zt()});function Bt(e){Rt=e,e?zt():(Lt?.release(),Lt=null)}function Vt(e){let{state:t}=e,n={kind:`none`},r=null;function i(){let n=new Date;t.lastBackupAt=n.toISOString();let{fileName:r,text:i}=kt(t,n);J(t),Ft(r,`application/json`,i),e.render(),e.showToast(`Backup saved. Keep the file somewhere safe.`)}function a(t){let i=new FileReader;i.onload=()=>{let t=At(String(i.result??``));t.ok?(r={state:t.state,summary:t.summary},n={kind:`confirm`,summary:t.summary}):(r=null,n={kind:`error`,message:t.error}),e.render()},i.onerror=()=>{n={kind:`error`,message:`Couldn't read that file. Try picking it again.`},e.render()},i.readAsText(t)}function o(){if(!r)return;e.music.stop(),Object.assign(t,r.state),r=null,n={kind:`none`},e.resetCalendarSelection();let i=J(t);e.go(t.profile&&t.equipmentConfirmed?`today`:`profile`),e.showToast(i?`Backup restored.`:`Restored, but couldn't save on this device — changes last until you close the page.`)}return{card:e=>Mt(t.lastBackupAt,n,e),handleAction(t){if(t===`save-backup`)i();else if(t===`choose-backup`)n={kind:`none`},e.root.querySelector(`input[data-field="restore-file"]`)?.click();else if(t===`cancel-restore`)r=null,n={kind:`none`},e.render();else if(t===`confirm-restore`)o();else return!1;return!0},handleFileChosen:a}}function Ht(e){let{root:t,state:n}=e,r=t.querySelector(`input[data-field="cal-time"]`)?.value??``;if(!pe(r)){e.showToast(`Pick a start time first.`);return}let i=Number(t.querySelector(`select[data-field="cal-minutes"]`)?.value);n.calendar={time:r,minutes:de.includes(i)?i:n.calendar.minutes},J(n);let a=(n.profile??V).weekPlan;Ft(`gym-guide-week.ics`,`text/calendar;charset=utf-8`,xe(a,n.calendar,new Date)),e.showToast(`Calendar file downloaded. Open it to add your workouts.`)}function Ut(e,t){let n=de.map(t=>`<option value="${t}"${t===e.minutes?` selected`:``}>${t} minutes</option>`).join(``);return`
    <section class="card">
      <h2>Add to your calendar</h2>
      <p class="hint">Adds your workout days as weekly repeating events. Tap the button, then open the file it downloads and your calendar app will offer to add them.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Start time</span>
          <input type="time" data-field="cal-time" value="${e.time}" />
        </label>
        <label class="calendar-field">
          <span>Length</span>
          <select data-field="cal-minutes">${n}</select>
        </label>
      </div>
      ${t?`<p class="notice">You changed your week. Tap Save profile below first, then add it to your calendar.</p>`:``}
      <button type="button" class="secondary" data-action="add-to-calendar"${t?` disabled`:``}>Add to calendar</button>
      <p class="hint small">This is a one-time copy. If you change your week later, delete the old events in your calendar and add it again. The events repeat every week until you delete them.</p>
    </section>
  `}var Wt=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],Gt=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function Kt(r,i,a){let o=e(r),s=n(r),c=new Map;for(let t of a)c.set(e(new Date(t.date)),t.day);return Array.from({length:7},(n,r)=>{let a=t(s,r),l=e(a),u={key:l,date:a,weekdayIndex:r,isToday:l===o},d=c.get(l);if(d)return{...u,status:`done`,workout:d};let f=i[r];return f?l<o?{...u,status:`missed`,workout:f}:{...u,status:`planned`,workout:f}:{...u,status:`rest`,workout:null}})}function qt(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function Jt(e){return e.isToday?`Today`:`${Gt[e.weekdayIndex]}, ${qt(e.date)}`}function Yt(e){let t=e.status===`done`&&e.workout?`${j[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${j[e.workout]} planned`:e.status===`missed`&&e.workout?`${j[e.workout]} planned, not logged`:`rest day`;return`${Gt[e.weekdayIndex]} ${qt(e.date)}, ${t}${e.isToday?`, today`:``}`}function Xt(e,t){return`
    <div class="calendar" role="group" aria-label="This week">${e.map(e=>{let n=e.workout?M[e.workout]:`Rest`,r=e.status===`done`?`✓`:e.status===`missed`?`○`:``;return`
        <button type="button" class="${[`cal-day`,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${Yt(e)}">
          <span class="cal-weekday">${Wt[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${r}</span>
        </button>`}).join(``)}</div>
  `}function Zt(e,t,n,r){return`
    <section class="card home-card">
      <h2>${e} <small>optional</small></h2>
      <p class="home-blurb">${t}</p>
      ${r?`<button type="button" class="secondary" data-day="${n}">Do ${j[n].toLowerCase()}</button>`:`<p class="hint">You can start it on the day.</p>`}
    </section>`}function Qt(e){return`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
    </section>

    ${Zt(`At-home abs`,`About 10 minutes, no equipment, gentle on your back and knees. Same voice and timer as a gym workout.`,`home`,e.isToday)}

    ${Zt(`Mobility reset`,`About 8 minutes of slow stretches for your neck, upper back and hips. No equipment.`,`mobility`,e.isToday)}

    ${e.isToday?`<section class="card">
             <p class="picker-hint">Want a gym workout instead?</p>
             ${re(null,`Pick a gym workout for today`,u)}
           </section>`:``}`}function $t(e){let t=[{value:`rest`,label:`Rest`,spoken:`Rest`},...l.map(e=>({value:e,label:M[e],spoken:j[e]}))];return`<div class="plan-editor">${Gt.map((n,r)=>{let i=e[r]??`rest`,a=t.map(e=>`
          <button type="button" class="plan-option${e.value===i?` active`:``}"
                  data-plan-day="${r}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===i}" aria-label="${n}: ${e.spoken}">${e.label}</button>`).join(``);return`
      <div class="plan-row">
        <span class="plan-day"><span aria-hidden="true">${n.slice(0,3)}</span><span class="sr-only">${n}</span></span>
        <div class="plan-options">${a}</div>
      </div>`}).join(``)}</div>`}function en(){return`
    <section class="card row-card easy-week-card">
      <div>
        <h2>Easy week</h2>
        <p class="hint">Fewer sets, same weights, until Sunday.</p>
      </div>
      <button type="button" class="secondary" data-action="easy-week-end">Turn off</button>
    </section>`}function tn(e){return`
    <section class="card easy-week-card">
      <h2>Time for an easy week?</h2>
      <p>You've trained ${e} weeks in a row. An easier week (one fewer set, same weights) can help you recover and come back stronger. It's optional.</p>
      <div class="button-row">
        <button type="button" class="secondary" data-action="easy-week-dismiss">Not now</button>
        <button type="button" class="primary" data-action="easy-week-start">Make this week easier</button>
      </div>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function nn(e){return`data-${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`}function rn(e){return`"${e.replace(/["\\]/g,`\\$&`)}"`}function an(e,t){if(!(e instanceof HTMLElement)||e===t||!t.contains(e))return null;let n=Object.entries(e.dataset).map(([e,t])=>`[${nn(e)}=${rn(t??``)}]`);return n.length===0?null:`${e.tagName.toLowerCase()}${n.join(``)}`}function on(e,t){e.querySelector(t)?.focus({preventScroll:!0})}function sn(e){let t=e.querySelector(`main h1`);t&&(t.tabIndex=-1,t.focus({preventScroll:!0}))}var cn={name:``,grams:``,goal:``,error:``,calorieName:``,calories:``,calorieGoal:``,calorieError:``,proteinQuickOpen:!1,calorieQuickOpen:!1};function ln(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function un(e,t){let n=e.waterGoal;return`
    <section class="card">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${ln(t,n)}
      <div class="button-row fuel-buttons">
        <button type="button" class="secondary" data-action="water" data-delta="-1" ${t===0?`disabled`:``} aria-label="Remove a glass">−1</button>
        <button type="button" class="primary" data-action="water" data-delta="1">+1 glass</button>
      </div>
      <div class="goal-row">
        <span>Daily goal</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="-1" aria-label="Lower water goal">−</button>
        <span>${n} glasses</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="1" aria-label="Raise water goal">+</button>
      </div>
    </section>
  `}function dn(e){return`
    <p class="hint">Set a daily goal to see how close you are. A common target for building muscle is about 0.7 g of protein per pound of body weight; a doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${I(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `}function fn(e,t,n){let r=z(e,t),i=Ke(r),a=e.proteinGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${ln(i,a)}`,s=r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap a food below to add it.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${I(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${I(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`,c=Ie.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-protein" data-index="${t}">
        <span>${e.name}</span><small>~${e.grams} g</small>
      </button>`).join(``);return`
    <section class="card">
      <h2>Protein</h2>
      ${o}
      ${s}

      <details class="quick-add" data-quick="protein"${n.proteinQuickOpen?` open`:``}>
        <summary>Quick add</summary>
        <div class="quick-grid">${c}</div>
        <p class="hint small">Amounts are rough averages for a typical serving.</p>
      </details>

      <h3>Something else</h3>
      <div class="inline-form">
        <input type="text" placeholder="What you ate" value="${I(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
        <input type="number" inputmode="numeric" min="1" placeholder="g" value="${I(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
        <button type="button" class="secondary" data-action="add-protein">Add</button>
      </div>
      ${n.error?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?dn(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function pn(e){return`
    <p class="hint">Set a daily goal to see how close you are. How much to eat depends on your body and goals; a doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 2400" value="${I(e.calorieGoal)}" data-field="calorie-goal" aria-label="Daily calorie goal" />
      <span>cal</span>
      <button type="button" class="secondary" data-action="set-calorie-goal">Set goal</button>
    </div>
  `}function mn(e,t,n){let r=z(e,t),i=Ue(r),a=e.calorieGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> cal today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} cal${i>=a?` — goal reached!`:``}</p>${ln(i,a)}`,s=r.calories.length===0?`<p class="hint">Nothing logged yet today. Tap a food below to add it.</p>`:`<ul class="entry-list">${r.calories.map((e,t)=>`
          <li>
            <span>${I(e.name)}</span>
            <span class="entry-grams">${e.kcal} cal</span>
            <button type="button" class="link-button" data-action="remove-calories" data-index="${t}" aria-label="Remove ${I(e.name)} calories">Remove</button>
          </li>`).join(``)}</ul>`,c=Le.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-calories" data-index="${t}">
        <span>${e.name}</span><small>~${e.kcal} cal</small>
      </button>`).join(``);return`
    <section class="card">
      <h2>Calories</h2>
      ${o}
      ${s}

      <details class="quick-add" data-quick="calories"${n.calorieQuickOpen?` open`:``}>
        <summary>Quick add</summary>
        <div class="quick-grid">${c}</div>
        <p class="hint small">Amounts are rough averages for a typical serving. Use the box below if you know the real number.</p>
      </details>

      <h3>Something else</h3>
      <div class="inline-form">
        <input type="text" placeholder="What you ate" value="${I(n.calorieName)}" data-field="calorie-name" aria-label="Food name for calories" maxlength="60" />
        <input type="number" inputmode="numeric" min="1" placeholder="cal" value="${I(n.calories)}" data-field="calorie-amount" aria-label="Calories" class="grams-input" />
        <button type="button" class="secondary" data-action="add-calories">Add</button>
      </div>
      ${n.calorieError?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}

      ${a===null?pn(n):`<button type="button" class="link-button" data-action="clear-calorie-goal">Change calorie goal (${a} cal)</button>`}
    </section>
  `}function hn(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Water, protein and calories help your muscles recover and grow. Today's log resets at midnight.</p>
    </header>
    ${un(e,z(e,t).glasses)}
    ${fn(e,t,n)}
    ${mn(e,t,n)}
  `}function gn(t){let{root:n,state:r}=t,i={...cn};function a(e){return n.querySelector(`input[data-field="${e}"]`)?.value??``}function o(){i={name:a(`protein-name`),grams:a(`protein-grams`),goal:a(`protein-goal`),error:``,calorieName:a(`calorie-name`),calories:a(`calorie-amount`),calorieGoal:a(`calorie-goal`),calorieError:``,proteinQuickOpen:n.querySelector(`details[data-quick="protein"]`)?.open??i.proteinQuickOpen,calorieQuickOpen:n.querySelector(`details[data-quick="calories"]`)?.open??i.calorieQuickOpen}}function s(n,a,s){o();let c=e(new Date),l=r.nutrition;if(n===`water`)r.nutrition=Re(l,c,Number(a));else if(n===`water-goal`)r.nutrition={...l,waterGoal:Math.min(20,Math.max(1,l.waterGoal+Number(a)))};else if(n===`quick-protein`){let e=Ie[Number(s)];e&&(r.nutrition=ze(l,c,e))}else if(n===`add-protein`){let e=qe(i.name,i.grams);e?i.error=e:(r.nutrition=ze(l,c,{name:i.name.trim(),grams:Number(i.grams)}),i={...i,name:``,grams:``})}else if(n===`remove-protein`)r.nutrition=Be(l,c,Number(s));else if(n===`set-protein-goal`){let e=Number(i.goal);!Number.isInteger(e)||e<1||e>400?i.error=`Enter a protein goal in whole grams, between 1 and 400.`:r.nutrition={...l,proteinGoal:e}}else if(n===`clear-protein-goal`)i.goal=String(l.proteinGoal??``),r.nutrition={...l,proteinGoal:null};else if(n===`quick-calories`){let e=Le[Number(s)];e&&(r.nutrition=Ve(l,c,e))}else if(n===`add-calories`){let e=We(i.calorieName,i.calories);e?i.calorieError=e:(r.nutrition=Ve(l,c,{name:i.calorieName.trim(),kcal:Number(i.calories)}),i={...i,calorieName:``,calories:``})}else if(n===`remove-calories`)r.nutrition=He(l,c,Number(s));else if(n===`set-calorie-goal`){let e=Ge(i.calorieGoal);e?i.calorieError=e:r.nutrition={...l,calorieGoal:Number(i.calorieGoal)}}else n===`clear-calorie-goal`&&(i.calorieGoal=String(l.calorieGoal??``),r.nutrition={...l,calorieGoal:null});J(r)||(i.error=`Couldn't save on this device.`),t.render()}return{screen:()=>hn(r.nutrition,e(new Date),i),handleAction:s}}var _n=[{title:`Tell us about you`,detail:`Your goal, and any injuries or sore spots to protect.`},{title:`Pick your gym's equipment`,detail:`You only get exercises that use machines your gym has.`},{title:`Follow today's workout`,detail:`Step-by-step form, a rest timer, and a voice that talks you through each set.`}];function vn(e){return`
    <header class="screen-header">
      <h1>Welcome to Gym Guide</h1>
      <p class="lead">It tells you what to do at the gym today and shows exactly how to do each exercise. It takes about a minute to set up.</p>
    </header>

    <section class="card">
      <ol class="intro-steps">${_n.map((e,t)=>`
      <li>
        <span class="step-number" aria-hidden="true">${t+1}</span>
        <div>
          <strong>${e.title}</strong>
          <p class="hint">${e.detail}</p>
        </div>
      </li>`).join(``)}</ol>
    </section>

    <button type="button" class="primary big" data-action="start-setup">Get started</button>
    <p class="hint small center-text">Everything stays on this phone.</p>

    ${e}
  `}var yn=`CC BY 4.0`,bn=`https://creativecommons.org/licenses/by/4.0/`,Y=`https://freemusicarchive.org/music`,xn={file:`punjabi-bhangra.mp3`,title:`Punjabi Bhangra Energy Short Burst`,artist:`Alex Morgan`,source:`${Y}/alex-morgan/kids-comedy-holiday/punjabi-bhangra-energy-short-burst/`},Sn={file:`boom-bap.mp3`,title:`Boom Bap Old School Hip-Hop Beat`,artist:`Alex Morgan`,source:`${Y}/alex-morgan/trap-hip-hop-beats/boom-bap-old-school-hip-hop-beat/`},Cn={file:`electronic-dance.mp3`,title:`Energetic Upbeat Electronic Dance`,artist:`Music for Creators`,source:`${Y}/fretbound/single/energetic-upbeat-electronic-dance/`},wn={file:`energetic-pop.mp3`,title:`Energetic Pop Background`,artist:`AurosonMusic`,source:`${Y}/aurosonmusic/single/energetic-pop-background/`},Tn={file:`bright-pop.mp3`,title:`Bright Energetic Upbeat Pop`,artist:`Music for Creators`,source:`${Y}/fretbound/single/bright-energetic-upbeat-pop/`},En={file:`disco-funk.mp3`,title:`Mirrorglow (Upbeat & Energetic Disco Funk)`,artist:`Vlad Annenkov`,source:`${Y}/vlad-annenkov/single/upbeat-energetic-disco-funk-mirrorglowmp3/`},Dn={file:`pop-rock.mp3`,title:`Neon Pulse (Energetic Pop Rock)`,artist:`Vlad Annenkov`,source:`${Y}/vlad-annenkov/single/energetic-pop-rock-neon-pulsemp3/`},On={file:`hype-trap.mp3`,title:`Hard Hype Trap for Sports Intros`,artist:`Alex Morgan`,source:`${Y}/alex-morgan/trap-hip-hop-beats/hard-hype-trap-for-sports-intros/`},kn={file:`phonk-gym.mp3`,title:`Hard Phonk Gym Workout Track`,artist:`Alex Morgan`,source:`${Y}/alex-morgan/phonk-drift/hard-phonk-gym-workout-track/`},An={file:`workout-edm.mp3`,title:`Workout Songs`,artist:`Alex Morgan`,source:`${Y}/alex-morgan/epic-action-sports/workout-songs/`},jn={file:`masala-madness.mp3`,title:`Masala Madness`,artist:`Geoff Harvey - Purple Planet Music`,source:`${Y}/geoff-harvey-purple-planet-music/indian-life/masala-madness-1/`},Mn={file:`mumbai-mood.mp3`,title:`Mumbai Mood`,artist:`Geoff Harvey - Purple Planet Music`,source:`${Y}/geoff-harvey-purple-planet-music/indian-life/mumbai-mood-1/`},Nn={file:`bollywood-flame.mp3`,title:`Bollywood Flame With Bright Festive Drive`,artist:`Alex Morgan`,source:`${Y}/alex-morgan/advertising-broadcast-vol-2/bollywood-flame-with-bright-festive-drive/`},Pn={file:`weekend-chill.mp3`,title:`Chill Hip Hop - Weekend Chill Beat`,artist:`AurosonMusic`,source:`${Y}/aurosonmusic/single/chill-hip-hop-weekend-chill-beat/`},Fn={push:{name:`Push day mix`,songs:[On,xn,jn,Sn,Cn,En,An]},pull:{name:`Pull day mix`,songs:[kn,Mn,Cn,xn,Dn,jn,wn]},legs:{name:`Legs day mix`,songs:[On,jn,Sn,xn,kn,En,An]},home:{name:`At-home abs mix`,songs:[Tn,Mn,wn,Nn,Cn,An]},mobility:{name:`Mobility mix`,songs:[Pn]}};function In(){let e=new Map;for(let t of Object.values(Fn))for(let n of t.songs)e.set(n.file,n);return[...e.values()]}function Ln(e){return new URL(`music/${e.file}`,document.baseURI).href}var Rn=.3,zn=8e3;function Bn(e,t,n=()=>new Audio){let r=null,i=null,a=0,o=0,s=null,c;function l(e,t){if(!r)return;let n=Fn[e].songs;a=t%n.length,r.src=Ln(n[a]),r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`))}function u(e){i!==null&&(f(),t(e))}function d(){i!==null&&l(i,a+1)}function f(){window.clearTimeout(c),r&&=(r.pause(),null),i=null,s=null,o=0,e()}function p(){window.clearTimeout(c),r&&s!==null&&(r.volume=s,s=null)}function m(t){if(r&&i===t){r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`));return}r?.pause(),r=n(),r.addEventListener(`ended`,d),r.addEventListener(`playing`,()=>{o=0}),r.addEventListener(`error`,()=>{o+=1,o>=Fn[t].songs.length?u(`The music couldn't load. Check your connection and try again.`):d()}),i=t,o=0,s=null,l(t,0),e()}return{play:m,stop:f,current:()=>i,duck(){r&&s===null&&(s=r.volume,r.volume=s*Rn,c=window.setTimeout(p,zn))},restore:p}}var Vn=`gym-guide-music`;function Hn(e){return{async savedCount(){let t=await e.open(Vn),n=0;for(let e of In())await t.match(Ln(e))&&(n+=1);return n},async save(t){navigator.storage?.persist?.().catch(()=>!1);let n=await e.open(Vn),r=0;for(let e of In()){let i=Ln(e);if(!await n.match(i)){let t=await fetch(i,{cache:`reload`});if(!t.ok)throw Error(`${e.file} could not be downloaded (${t.status})`);await n.put(i,t)}r+=1,t(r)}},async remove(){await e.delete(Vn)}}}var Un=70;function Wn(e,t){if(e.kind===`checking`)return``;let n;return n=e.kind===`saved`?`
      <p class="music-status">✓ All ${t} songs are saved on this phone.</p>
      <button type="button" class="link-button" data-action="remove-music-offline">Remove saved music</button>`:e.kind===`saving`?`
      <p class="fuel-total" role="status">Saving song ${Math.min(e.done+1,t)} of ${t}…</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e.done}">
        <div class="meter-fill" style="width: ${Math.round(e.done/t*100)}%"></div>
      </div>
      <p class="hint small">Keep this screen open until it finishes.</p>`:`
      ${e.saved>0?`<p class="hint">${e.saved} of ${t} songs are saved so far.</p>`:``}
      ${e.kind===`error`?`<p class="form-error" role="alert">${I(e.message)}</p>`:``}
      <button type="button" class="secondary" data-action="save-music-offline">${e.saved>0?`Finish saving the music`:`Save music for offline use`}</button>
      <p class="hint small">Uses about ${Un} MB on this phone. Do it on Wi-Fi.</p>`,`
    <section class="card offline-music">
      <h2>Music offline</h2>
      <p class="hint">Songs play from the internet. Save them on this phone to listen at the gym without signal.</p>
      ${n}
    </section>`}function Gn(e){let t=`caches`in window?Hn(window.caches):null,n=In().length,r={kind:`checking`};function i(){t?.savedCount().catch(()=>0).then(t=>{r=t===n?{kind:`saved`}:{kind:`idle`,saved:t},e.redrawProfile()})}async function a(){if(t&&r.kind!==`saving`){r={kind:`saving`,done:0},e.redrawProfile();try{await t.save(t=>{r={kind:`saving`,done:t},e.redrawProfile()}),r={kind:`saved`},e.redrawProfile(),e.showToast(`Music saved on this phone.`)}catch{r={kind:`error`,message:`Couldn't save all the music. Check your connection and free space on this phone, then try again.`,saved:await t.savedCount().catch(()=>0)},e.redrawProfile()}}}async function o(){await t?.remove(),r={kind:`idle`,saved:0},e.redrawProfile(),e.showToast(`Saved music removed. Songs will play from the internet.`)}return{card:()=>t?Wn(r,n):``,check:i,handleAction(e){if(e===`save-music-offline`)a();else if(e===`remove-music-offline`)o();else return!1;return!0}}}function Kn(e,t){let n=Fn[e],r=t===e,i=r?`<button type="button" class="secondary" data-action="stop-music" aria-label="Stop music">■ Stop</button>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}" aria-label="Play ${n.name}">▶ Play</button>`;return`
    <section class="card music-card row-card">
      <p class="music-name">♪ ${r?`Playing now`:n.name}</p>
      ${i}
    </section>`}function qn(){return`
    <details class="card music-credits">
      <summary>Music credits</summary>
      <ul>${In().map(e=>`<li><a href="${e.source}" target="_blank" rel="noopener noreferrer">${I(e.title)}</a> by ${I(e.artist)}</li>`).join(``)}</ul>
      <p class="hint small">From the Free Music Archive, used under the <a href="${bn}" target="_blank" rel="noopener noreferrer">${yn}</a> license. The songs by Alex Morgan are listed there as AI-generated.</p>
    </details>`}function Jn(e,t){let n=e[t];return n?.[n.length-1]}function X(e,t,n=`lb`){let r=e.sets.map(e=>e.amount).join(`, `),i=e.sets[e.sets.length-1]?.weight,a=t===`seconds`?` sec`:` reps`;return i==null?`${r}${a}`:`${nt(i,n)} × ${r}${a}`}function Yn(e,t,n,r={}){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let i=e.sets.every(e=>e.amount>=t.max),a=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,o=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||o===null)return{weight:null,message:i?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let s=r.weightUnit??`lb`,c=H(o,s),l=rt(s),u=e=>`${U(e)} ${s}`,d=n===`assist`?Math.max(0,c-l):c+l,f=n===`assist`?c+l:Math.max(0,c-l),p=tt(d,s),m=tt(f,s);return i?r.holdWeight?{weight:o,message:`Easy day: stay at ${u(c)} and keep the reps smooth.`}:{weight:p,message:n===`assist`?`You hit ${t.max} reps every set. Try ${u(d)} of help (a little less).`:`You hit ${t.max} reps every set. Try ${u(d)}.`}:a?{weight:m,message:`That was heavy. Try ${u(f)} and aim for ${t.min}–${t.max} reps.`}:{weight:o,message:`Stay at ${u(c)} and aim for ${t.max} reps on every set.`}}function Xn(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function Zn(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function Qn(e,t){let r=n(t);return Zn(e).filter(e=>new Date(e.date)>=r).length}function $n(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}function er(e,t){let r=n(t),i=0;for(let t of Object.values(e))for(let e of t)new Date(e.date)>=r&&(i+=e.sets.length);return i}function tr(e,t,n){let r=[];for(let[i,a]of Object.entries(e)){let e=n(i),o=a.filter(e=>e.sets.length>0);if(e===null||o.length<2||o[o.length-1].date<t)continue;let s=$n(o,e),c=s[s.length-1],l=s.slice(0,-1),u=e===`assist`?Math.min(...l):Math.max(...l);(e===`assist`?c<u:c>u)&&r.push({exerciseId:i,value:c,previous:u})}return r}var nr={1:`Wrecked`,2:`Tired`,3:`Okay`,4:`Good`,5:`Great`},rr=[1,2,3,4,5],ir=2,ar=70,or=6,sr=4,cr=85,lr=7;function ur(e){return e.feel<=ir||e.readiness!==null&&e.readiness<ar||e.hours!==null&&e.hours<or?`easy`:e.feel>=sr&&(e.readiness===null||e.readiness>=cr)&&(e.hours===null||e.hours>=lr)?`push`:`normal`}function dr(e){return e===`easy`?`Take it easy today. If you work out, workout mode drops a set from each exercise and keeps your weights where they were. Resting is fine too.`:e===`push`?`You're well recovered, so it's a good day to aim for the top of your rep range. Keep your form clean.`:`A normal day: train as planned.`}function fr(e,t){return t===`easy`?{...e,sets:Math.max(1,e.sets-1)}:e}function pr(e){let t=[`Felt ${nr[e.feel].toLowerCase()} (${e.feel}/5)`];return e.hours!==null&&t.push(`slept ${e.hours} h`),e.readiness!==null&&t.push(`readiness ${e.readiness}`),t.join(` · `)}function mr(e,t){return e.find(e=>e.date===t)}function hr(e,t){return[...e.filter(e=>e.date!==t.date),t].sort((e,t)=>e.date.localeCompare(t.date)).slice(-180)}function gr(e,t,n){if(e===null||!rr.includes(e))return{ok:!1,error:`Tap a number for how rested you feel.`};let r=null;if(t.trim()!==``&&(r=Number(t),!Number.isFinite(r)||r<0||r>24))return{ok:!1,error:`Hours slept should be a number between 0 and 24, or leave it blank.`};let i=null;return n.trim()!==``&&(i=Number(n),!Number.isInteger(i)||i<0||i>100)?{ok:!1,error:`Readiness should be a whole number from 0 to 100, or leave it blank.`}:{ok:!0,feel:e,hours:r,readiness:i}}var _r=10;function vr(e){let t=o[e];return t?t.weightKind??`load`:null}function yr(e){return e.timedSeconds?`seconds`:`reps`}function Z(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function br(e,t,n){return(e.weightKind??`load`)===`bodyweight`?t:H(t,n)}function xr(e,t,n){let r=e.weightKind??`load`;return r===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:r===`assist`?`${U(t)} ${n} of help`:`${U(t)} ${n}`}function Sr(e,t,r){let i=tr(e,n(t).toISOString(),vr).filter(({exerciseId:e})=>o[e]);return i.length===0?``:`
    <section class="card highlights-card">
      <h2>🏆 New personal bests this week</h2>
      <ul class="summary">${i.map(({exerciseId:e,value:t,previous:n})=>{let i=o[e];return`<li><strong>${i.name}</strong>: ${xr(i,br(i,t,r),r)} <span class="hint">(was ${xr(i,br(i,n,r),r)})</span></li>`}).join(``)}</ul>
    </section>`}function Cr(e,t,n,r){let i={top:22,right:20,bottom:22,left:20},a=Math.min(...n),o=Math.max(...n),s=o-a||1,c=e=>i.left+e*(300-i.left-i.right)/(n.length-1),l=e=>i.top+(o-e)*(110-i.top-i.bottom)/s,u=n.map((e,t)=>`${t===0?`M`:`L`}${c(t).toFixed(1)},${l(e).toFixed(1)}`).join(` `),d=n.map((e,n)=>{let i=`${Z(t[n])}: ${r(e)}`;return`
        <g class="chart-point" data-point="${i}" tabindex="0" role="button" aria-label="${i}">
          <circle cx="${c(n)}" cy="${l(e)}" r="14" class="hit" />
          <circle cx="${c(n)}" cy="${l(e)}" r="4.5" class="dot" />
        </g>`}).join(``);return`
    <svg class="trend-chart" viewBox="0 0 300 110" role="img" aria-label="${e} over time">
      <line x1="${i.left}" x2="${300-i.right}" y1="${110-i.bottom+6}" y2="${110-i.bottom+6}" class="baseline" />
      <path d="${u}" class="trend-line" />
      ${d}
      <text x="${c(0)}" y="${l(n[0])-10}" class="value-label" text-anchor="start">${n[0]}</text>
      <text x="${c(n.length-1)}" y="${l(n[n.length-1])-10}" class="value-label" text-anchor="end">${n[n.length-1]}</text>
      <text x="${i.left}" y="106" class="axis-label">${Z(t[0])}</text>
      <text x="${300-i.right}" y="106" class="axis-label" text-anchor="end">${Z(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function wr(e,t,r){let i=new Set(tr(e,n(t).toISOString(),vr).map(({exerciseId:e})=>e));return Object.entries(e).filter(([e,t])=>o[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let n=o[e],a=t.filter(e=>e.sets.length>0),s=$n(a,n.weightKind??`load`).map(e=>br(n,e,r)),c=a[a.length-1],l=i.has(e),u=(n.weightKind??`load`)===`assist`?Math.min(...s):Math.max(...s),d=s.length>=2?Cr(n.name,a.map(e=>e.date),s,e=>xr(n,e,r)):`<p class="hint">Log it again to start a chart.</p>`;return`
        <section class="card progress-card">
          <h3 class="progress-name">${n.name}</h3>
          <p class="progress-stats">
            <span>Best: <strong>${xr(n,u,r)}</strong>${l?` <span class="new-best">New best!</span>`:``}</span>
            <span>Last: ${X(c,yr(n),r)}</span>
          </p>
          ${d}
        </section>`}).join(``)}function Tr(e,t){let n=Zn(e).slice(0,_r);if(n.length===0)return``;let r=n.map(e=>{let n=e.entries.filter(({exerciseId:e})=>o[e]).map(({exerciseId:e,session:n})=>{let r=o[e];return`<li>${r.name}: <span class="hint">${X(n,yr(r),t)}</span></li>`}).join(``);return`
        <h3 class="progress-name">${Z(e.date)}</h3>
        <ul class="summary">${n}</ul>`});return`
    <details class="card switcher recent-workouts">
      <summary>Recent workouts (${n.length})</summary>
      ${r.join(``)}
    </details>`}function Er(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r,12).toISOString()}function Dr(e){if(e.length===0)return``;let t=e.slice(-14),n=t[t.length-1],r=[{name:`How rested you felt`,points:t.map(e=>({date:e.date,value:e.feel})),format:e=>`${nr[e]??e} (${e}/5)`},{name:`Hours slept`,points:t.flatMap(e=>e.hours===null?[]:[{date:e.date,value:e.hours}]),format:e=>`${e} h`},{name:`Readiness`,points:t.flatMap(e=>e.readiness===null?[]:[{date:e.date,value:e.readiness}]),format:e=>String(e)}].filter(e=>e.points.length>=2).map(e=>`
        <section class="card progress-card">
          <h3 class="progress-name">${e.name}</h3>
          ${Cr(e.name,e.points.map(e=>Er(e.date)),e.points.map(e=>e.value),e.format)}
        </section>`).join(``);return`
    <h2 class="section-title">Recovery</h2>
    <section class="card">
      <p class="progress-stats"><span>Last check-in (${Z(Er(n.date))}): ${pr(n)}</span></p>
      ${r?``:`<p class="hint">Check in on a few more mornings and your charts will appear here.</p>`}
    </section>
    ${r}`}function Or(e,t,n,r,i=`lb`){let a=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log in workout mode.</p>
    </header>`;if(Zn(e).length===0)return`${a}
      <section class="card empty">
        <p>No workouts logged yet. Start a workout and save your sets, and your progress will show up here.</p>
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>
      ${Dr(r)}`;let o=Qn(e,t),s=er(e,t);return`${a}
    <section class="card week-card">
      <p class="week-count"><strong>${o}</strong> of ${n}</p>
      <p>workouts this week${o>=n?` — goal reached!`:``}</p>
      <p class="week-sets">${s} ${s===1?`set`:`sets`} logged</p>
      <p class="hint small">Your goal is the workout days in your week plan. The week starts Monday.</p>
    </section>

    ${Sr(e,t,i)}

    ${Dr(r)}

    <h2 class="section-title">Exercises</h2>
    ${wr(e,t,i)}

    ${Tr(e,i)}
  `}var kr={open:!1,feel:null,hours:``,readiness:``,error:``};function Ar(e){return`
    <section class="card recovery-card">
      <h2>Morning check-in</h2>
      <p class="feel-question" id="feel-question">How rested do you feel?</p>
      <div class="feel-row" role="group" aria-labelledby="feel-question">${rr.map(t=>`
      <button type="button" class="feel-option${e.feel===t?` active`:``}" data-action="checkin-feel" data-value="${t}" aria-pressed="${e.feel===t}">
        <strong>${t}</strong><small>${nr[t]}</small>
      </button>`).join(``)}</div>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Hours slept <small>(optional)</small></span>
          <input type="number" inputmode="decimal" step="0.5" min="0" max="24" placeholder="7.5" value="${e.hours}" data-field="checkin-hours" />
        </label>
        <label class="calendar-field">
          <span>Readiness <small>(optional)</small></span>
          <input type="number" inputmode="numeric" step="1" min="0" max="100" placeholder="0–100" value="${e.readiness}" data-field="checkin-readiness" />
        </label>
      </div>
      <p class="hint small">Readiness is the score from a ring or watch such as Oura, if you have one. Skip it if you don't.</p>
      ${e.error?`<p class="form-error" role="alert">${e.error}</p>`:``}
      <div class="button-row">
        <button type="button" class="secondary" data-action="checkin-cancel">Cancel</button>
        <button type="button" class="primary" data-action="checkin-save">Save check-in</button>
      </div>
    </section>`}function jr(e,t){if(t.open)return Ar(t);if(!e)return`
      <section class="card recovery-card row-card">
        <div>
          <h2>Morning check-in</h2>
          <p class="hint">Ten seconds. Tunes today's workout.</p>
        </div>
        <button type="button" class="secondary" data-action="checkin-open">Check in</button>
      </section>`;let n=ur(e);return`
    <section class="card recovery-card level-${n}">
      <h2>Today's recovery</h2>
      <p class="recovery-summary">${pr(e)}</p>
      <p class="recovery-advice">${dr(n)}</p>
      <button type="button" class="link-button" data-action="checkin-open">Change check-in</button>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function Mr(t){let{root:n,state:r}=t,i={...kr};function a(){return mr(r.recovery,e(new Date))}function o(){let e=n.querySelector(`input[data-field="checkin-hours"]`),t=n.querySelector(`input[data-field="checkin-readiness"]`);e&&(i.hours=e.value),t&&(i.readiness=t.value)}function s(n,s){if(o(),n===`checkin-open`){let e=a();i={open:!0,feel:e?.feel??null,hours:e?.hours===null||e===void 0?``:String(e.hours),readiness:e?.readiness===null||e===void 0?``:String(e.readiness),error:``}}else if(n===`checkin-feel`)i={...i,feel:Number(s),error:``};else if(n===`checkin-cancel`)i={...kr};else if(n===`checkin-save`){let n=gr(i.feel,i.hours,i.readiness);if(!n.ok)i={...i,error:n.error};else{r.recovery=hr(r.recovery,{date:e(new Date),feel:n.feel,hours:n.hours,readiness:n.readiness}),i={...kr},J(r),t.render(),t.showToast(`Check-in saved.`);return}}t.render()}return{today:a,card:()=>jr(a(),i),handleAction(e,t){return e.startsWith(`checkin-`)?(s(e,t),!0):!1}}}function Nr(e,t,n=null){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:fr(e.prescription,n),index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null,recoveryLevel:n}}function Q(e){return e.exercises[e.index]}function Pr(e){return e.setNumber>=e.prescription.sets}function Fr(e){return e.index>=e.exercises.length-1}function Ir(e){return{...e,phase:`log`}}function Lr(e,t){if(Pr(e)&&Fr(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return Pr(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function Rr(e){return{...e,phase:`lift`,restEndsAt:null}}function zr(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function Br(e){return Fr(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function Vr(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function Hr(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}function $(e,t,n){let r=Jn(e,n);return r&&r.date===t.startedAt?r.sets:[]}function Ur(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function Wr(e,t,n,r=`lb`){let i=h(n.exercise,t.prescription);return Yn(Ur(e,t,n.exercise.id),i,n.exercise.weightKind??`load`,{holdWeight:t.recoveryLevel===`easy`,weightUnit:r})}function Gr(e,t){let n=h(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function Kr(e){return`Exercise ${e.index+1} of ${e.exercises.length} · ${ne(e.day)}`}function qr(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function Jr(e,t,n,r,i,a=`lb`){let o=Q(e);if(!o)return``;let s=Ur(t,e,o.exercise.id),c=h(o.exercise,e.prescription),l=Wr(t,e,o,a),u=$(t,e,o.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${Kr(e)}</p>
      <h1>${o.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}
    ${e.recoveryLevel===`easy`?`<p class="notice">Easy day: fewer sets, and your weights stay where they were.</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${Gr(e,o)}</p>
      ${s?`<p class="last-time">Last time: ${X(s,c.unit,a)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${l.message}</p>`:``}
      ${u.length>0?`<p class="last-time">Today so far: ${X({date:``,sets:u},c.unit,a)}</p>`:``}
    </section>

    ${oe(o)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    <details class="card how-to">
      <summary>How to do it</summary>
      ${se(o)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${Kn(e.day,i)}
    ${qr(n,!0)}
  `}function Yr(e,t){let n=e.exercises.reduce((n,r)=>n+$(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${Kr(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function Xr(e,t){let n=Q(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
        <button type="button" class="swap-option" data-action="choose-swap" data-index="${t}">
          <strong>${e.exercise.name}</strong>
          <small>${e.exercise.muscles}</small>
          ${e.cautionAreas.length>0?`<small class="swap-caution">Go easy: has a caution for you</small>`:``}
        </button>`).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">${Kr(e)}</p>
      <h1>Swap ${n.exercise.name}</h1>
      <p class="lead">Pick another exercise that works the same muscles. ${n.exercise.name} stays in future workouts.</p>
    </header>

    <div class="swap-list">${r}</div>

    <button type="button" class="secondary" data-action="cancel-swap">Keep ${n.exercise.name}</button>
  `}function Zr(e,t,n,r=`lb`){let i=Q(e);if(!i)return``;let a=i.exercise.weightKind??`load`,o=h(i.exercise,e.prescription),s=i.exercise.equipment.includes(`dumbbells`),c=a===`assist`?`Help from the machine (${r})`:s?`Weight (${r}, per dumbbell)`:`Weight (${r})`,l=(e,t,n,r)=>`
    <label class="stepper-label" for="log-${e}">${t}</label>
    <div class="stepper">
      <button type="button" class="step-button" data-step="${e}" data-delta="${-r}" aria-label="Less">−</button>
      <input id="log-${e}" type="number" inputmode="decimal" min="0" value="${n}" data-field="${e}" />
      <button type="button" class="step-button" data-step="${e}" data-delta="${r}" aria-label="More">+</button>
    </div>
  `;return`
    <header class="screen-header">
      <p class="eyebrow">${Kr(e)}</p>
      <h1>Set ${e.setNumber} done</h1>
      <p class="lead">${i.exercise.name}: what did you do?</p>
    </header>

    <section class="card">
      ${a===`bodyweight`?``:l(`weight`,c,t.weight,rt(r))}
      ${l(`amount`,o.unit===`seconds`?`Seconds held`:`Reps`,t.amount,1)}
      ${n?`<p class="form-error" role="alert">${n}</p>`:``}
    </section>

    <button type="button" class="primary big" data-action="save-set">Save set</button>
  `}function Qr(e,t,n,r){let i=Q(e);if(!i)return``;let a=e.setNumber===1?`Next exercise: <strong>${i.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${i.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${Kr(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${ce(Hr(e,t))}</p>
      <p>${a}</p>
      <p class="hint">You'll hear when rest is over. Sharing a machine? No rush: the next set waits until you tap Set done.</p>
    </section>

    <div class="button-row">
      <button type="button" class="secondary" data-action="add-rest">+30 seconds</button>
      <button type="button" class="secondary" data-action="skip-rest">Skip rest</button>
    </div>
    ${Kn(e.day,r)}
    ${qr(n)}
  `}function $r(e,t,n){let r=tr(t,e.startedAt,e=>o[e]?o[e].weightKind??`load`:null);if(r.length===0)return``;let i=r.map(({exerciseId:e,value:t,previous:r})=>{let i=o[e],a=i.weightKind??`load`,s=a===`bodyweight`?i.timedSeconds?`sec`:`reps`:n,c=e=>U(a===`bodyweight`?e:H(e,n));return`<li><strong>${i.name}</strong>: ${c(t)} ${s} <span class="hint">(was ${c(r)} ${s})</span></li>`}).join(``);return`
    <section class="card highlights-card">
      <h2>🏆 New personal best${r.length===1?``:`s`}</h2>
      <ul class="summary">${i}</ul>
    </section>`}function ei(e,t,n,r=`lb`){let i=e.exercises.map(n=>{let i=$(t,e,n.exercise.id),a=h(n.exercise,e.prescription).unit,o=i.length>0?X({date:``,sets:i},a,r):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${o}</span></li>`}).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    ${$r(e,t,r)}

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${i}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${ae(n,`warm-up`)}
    </section>

    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function ti(e,t){let n=h(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function ni(e,t,n=`lb`){let r=Q(e);if(!r)return``;let i=[e.setNumber===1?`${r.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${ti(e,r)}.`],a=Wr(t,e,r,n);return e.setNumber===1&&a.weight!==null&&i.push(`Try ${U(H(a.weight,n))} ${it(n)}.`),i.filter(Boolean).join(` `)}function ri(e){return`Rest ${e.prescription.restSeconds} seconds.`}function ii(e){let t=Q(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var ai=10,oi=30,si=`If the pain was sharp or keeps coming back, stop and get it checked.`;function ci(e,t){let{root:n,state:r,music:i}=e,a=!0,o={weight:``,amount:``},s=``,c,l=!1,u=``,d=null,f=!1;function p(e){a&&e&&Pt(e,{onStart:i.duck,onEnd:i.restore})}function m(){let e=r.session;if(!e)return``;if(f)return Yr(e,r.history);switch(e.phase){case`lift`:return d?Xr(e,d):Jr(e,r.history,a,u,i.current(),r.weightUnit);case`log`:return Zr(e,o,s,r.weightUnit);case`rest`:return Qr(e,Date.now(),a,i.current());case`done`:return ei(e,r.history,t.workoutFor(e.day).coolDown,r.weightUnit)}}function g(){let e=r.session,t=e&&Q(e);if(!e||!t)return;let n=$(r.history,e,t.exercise.id),i=n[n.length-1],a=Wr(r.history,e,t,r.weightUnit),c=h(t.exercise,e.prescription),l=i?.weight??a.weight;o={weight:l==null?``:String(H(l,r.weightUnit)),amount:String(i?.amount??c.max)},s=``}function _(e){return n.querySelector(`input[data-field="${e}"]`)?.value.trim()??``}function v(){let t=r.session,n=t&&Q(t);if(!t||!n)return;let i=(n.exercise.weightKind??`load`)===`bodyweight`;o={weight:_(`weight`),amount:_(`amount`)};let a=Number(o.amount);if(!Number.isInteger(a)||a<1||a>300){s=`Enter how many reps (or seconds) you did, as a whole number.`,e.render();return}let c=null;if(!i){if(c=Number(o.weight),o.weight===``||!Number.isFinite(c)||c<0||c>1e3){s=`Enter the weight in ${it(r.weightUnit)}. Use 0 if there was no added weight.`,e.render();return}c=tt(c,r.weightUnit)}r.history=Xn(r.history,n.exercise.id,t.startedAt,{weight:c,amount:a}),r.session=Lr(t,Date.now()),J(r),y()}function y(n=!0){window.clearInterval(c);let i=r.session;i&&(i.phase===`rest`?(l=Hr(i,Date.now())<=ai,p(ri(i)),c=window.setInterval(b,250)):i.phase===`lift`?n&&p(ni(i,r.history,r.weightUnit)):i.phase===`done`&&(Bt(!1),t.completeWorkout(i.day),J(r),p(`Workout complete. Nice work!`),It([200,100,200])),e.render(),window.scrollTo(0,0))}function b(){let e=r.session;if(!e||e.phase!==`rest`){window.clearInterval(c);return}let t=Hr(e,Date.now()),i=n.querySelector(`[data-timer]`);i&&(i.textContent=ce(t)),!l&&t<=ai&&t>0&&(l=!0,p(ii(e))),t===0&&(It([300]),r.session=Rr(e),J(r),p(`Go.`),window.setTimeout(()=>y(),a?900:0),window.clearInterval(c))}function x(){window.clearInterval(c),d=null,f=!1,Bt(!1),r.session=null,e.resetCalendarSelection(),J(r),e.go(`today`)}function S(){let e=r.session,n=e&&Q(e);if(!e||!n||!r.profile)return;t.setAvoided(n.exercise.id,!0);let i=e.exercises.map(e=>e.exercise.id),[a]=O(n,r.profile,r.equipmentIds,i);a?(r.session=Vr(e,a),u=`Switched from ${n.exercise.name} to ${a.exercise.name}, which works the same muscles. ${si}`,p(`Switched to ${a.exercise.name}.`)):(r.session=Br(e),u=`Skipped ${n.exercise.name}. There's no gentler option for it with your equipment. ${si}`),J(r),y(!a)}function C(o,s){let c=r.session;if(c){if(o!==`hurt`&&o!==`toggle-voice`&&(u=``),o===`open-swap`){let t=Q(c);if(!t||!r.profile)return;let n=c.exercises.map(e=>e.exercise.id);d=O(t,r.profile,r.equipmentIds,n),e.render(),window.scrollTo(0,0)}else if(o===`choose-swap`){let e=d?.[Number(s)];if(d=null,!e)return;r.session=Vr(c,e),J(r),y()}else o===`cancel-swap`?(d=null,e.render()):o===`hurt`?S():o===`set-done`?(r.session=Ir(c),g(),e.render(),n.querySelector(`input[data-field="amount"]`)?.select()):o===`save-set`?v():o===`add-rest`?(r.session=zr(c,oi,Date.now()),l=!1,J(r),b()):o===`skip-rest`?(r.session=Rr(c),J(r),y()):o===`skip-exercise`?(r.session=Br(c),J(r),y()):o===`play-music`?i.play(c.day):o===`stop-music`?i.stop():o===`toggle-voice`?(a=!a,a||window.speechSynthesis?.cancel(),e.render()):o===`end-workout`?(f=!0,e.render(),window.scrollTo(0,0)):o===`cancel-end`?(f=!1,e.render()):o===`confirm-end`?(c.exercises.some(e=>$(r.history,c,e.exercise.id).length>0)&&t.completeWorkout(c.day),x()):o===`close-session`&&x()}}return{screen:m,handleAction:C,begin(e,t){r.session=Nr(e,new Date,t),J(r),Bt(!0),y()},resume(){r.session&&(r.session.phase===`rest`&&Hr(r.session,Date.now())===0&&(r.session=Rr(r.session)),r.session.phase===`log`&&g(),Bt(r.session.phase!==`done`),r.session.phase===`rest`&&(c=window.setInterval(b,250)))}}}function li(t){let n=Et(),r=n.profile?n.equipmentConfirmed?`today`:`equipment`:`intro`,i=e(new Date),a=null,s=n.profile?{...n.profile}:{...V},c,l=!1,u=Bn(w,b),d={root:t,state:n,music:u,render:w,showToast:b,go:x,redrawProfile:S,resetCalendarSelection:C},f=Vt(d),p=Gn(d),g=gn(d),_=Mr(d),v=ci(d,{workoutFor:N,completeWorkout:ne,setAvoided:ee});function y(e){b(J(n)?e:`Couldn't save on this device — changes last until you close the page.`)}function b(e){let n=t.querySelector(`.toast`);n&&(n.textContent=e,n.classList.add(`visible`),window.clearTimeout(c),c=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function x(e){r=e,e===`profile`&&(s=n.profile?{...n.profile}:{...V}),w(),sn(t),window.scrollTo(0,0)}function S(){r===`profile`&&!n.session&&w()}function C(){i=e(new Date),a=null}function w(){let e=t.querySelector(`details.profile-more`);e&&(l=e.open);let r=n.profile!==null&&n.equipmentConfirmed,i=n.session!==null;document.body.classList.toggle(`has-nav`,r&&!i);let a=an(document.activeElement,t);t.innerHTML=`
      <main class="screen">${i?v.screen():T()}</main>
      ${r&&!i?ue():``}
      <div class="toast" role="status" aria-live="polite"></div>
    `,a&&on(t,a)}function T(){if(r===`intro`)return vn(f.card(!0));if(r===`profile`)return O();if(r===`equipment`)return j();if(r===`progress`){let e=(n.profile??V).weekPlan.filter(Boolean).length;return Or(n.history,new Date,e,n.recovery,n.weightUnit)}return r===`fuel`?g.screen():le()}function E(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function D(){return`
      <details class="card switcher profile-more"${l?` open`:``}>
        <summary>More: calendar, music and backup</summary>
        <div class="more-body">
          ${Ut(n.calendar,k(n.profile??V))}
          ${p.card()}
          ${f.card(!1)}
          ${qn()}
        </div>
      </details>`}function O(){let e=n.profile===null;return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 1 of 2</p>`:``}
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      <section class="card">
        <h2>Your goal</h2>
        <div class="chip-col">
          ${Je.map(e=>E(`goal`,e.id,e.label,s.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Lifting experience</h2>
        <div class="chip-row three">
          ${Ye.map(e=>E(`experience`,e.id,e.label,s.experience===e.id)).join(``)}
        </div>
      </section>

      <section class="card">
        <h2>Weight units</h2>
        <div class="chip-row two">
          ${$e.map(e=>`<button type="button" class="chip${n.weightUnit===e?` active`:``}" data-action="set-weight-unit" data-value="${e}" aria-pressed="${n.weightUnit===e}">${e===`lb`?`Pounds (lb)`:`Kilograms (kg)`}</button>`).join(``)}
        </div>
        <p class="hint small">Only changes how weights are shown and typed. Your logged weights are kept.</p>
      </section>

      <section class="card">
        <h2>Your week</h2>
        <p class="hint">Pick a workout for each day, or Rest. Legs days include abs. You can change this any time.</p>
        ${$t(s.weekPlan)}
      </section>

      <section class="card">
        <h2>Areas to protect</h2>
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${Xe.map(e=>E(`area`,e.id,e.label,s.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${A()}

      ${e?``:D()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
    `}function k(e){return JSON.stringify(s.weekPlan)!==JSON.stringify(e.weekPlan)}function A(){let e=n.profile?.avoidedExerciseIds??[];return e.length===0?``:`
      <section class="card">
        <h2>Exercises that hurt</h2>
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${e.filter(e=>o[e]).map(e=>`
        <li class="avoided-item">
          <span>${o[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``)}</ul>
      </section>
    `}function ee(e,t){if(!n.profile)return;let r=n.profile.avoidedExerciseIds.filter(t=>t!==e);n.profile={...n.profile,avoidedExerciseIds:t?[...r,e]:r},s={...s,avoidedExerciseIds:n.profile.avoidedExerciseIds}}function j(){let e=!n.equipmentConfirmed,t=new Set(n.equipmentIds);return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 2 of 2</p>`:``}
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there.</p>
      </header>

      <section class="card equipment-list">
        ${Se.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${t.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function M(e,t,r){let{exercise:i}=e,a=Jn(n.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${t+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${X(a,r,n.weightUnit)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${oe(e)}
          ${se(e)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function N(e){return te(e,n.profile??V,n.equipmentIds)}function P(){let e=Kt(new Date,(n.profile??V).weekPlan,n.workoutLog),t=e.find(e=>e.key===i)??e.find(e=>e.isToday)??e[0];return{week:e,selected:t,shown:(t.isToday&&t.status!==`done`?a:null)??t.workout}}function ne(e){n.workoutLog=[...n.workoutLog,{date:new Date().toISOString(),day:e}],a=null}function ie(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${re(e,`Workout for today`)}
      </details>`}function I(e){if(!e)return``;let t=new Date;return De(n.deload,t)?en():ke(n.workoutLog,t,n.deload)?tn(Oe(n.workoutLog,t,n.deload.easyWeeks)):``}function ce(e){return e?_.card():``}function le(){let{week:e,selected:t,shown:n}=P(),r=Xt(e,t.key);if(n===null)return`
        <header class="screen-header">
          <p class="eyebrow">${Jt(t)}</p>
          <h1>Rest day</h1>
        </header>
        ${r}
        ${ce(t.isToday)}
        ${I(t.isToday)}
        ${Qt(t)}
      `;let i=N(n),a=t.status===`done`,o=t.status===`missed`,s=t.isToday&&!a,c=e.some(e=>e.isToday&&e.status!==`done`),l=i.exercises.length>0,d=l?i.exercises.map((e,t)=>M(e,t,h(e.exercise,i.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,f=l?a?`<p class="notice done-note">✓ Done. Your sets from this workout are in the Progress tab.</p>`:s?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:o?`<p class="notice">○ This one wasn't logged. It was planned for ${Gt[t.weekdayIndex]}.</p>
               ${c?`<button type="button" class="secondary" data-action="do-today" data-workout="${n}">Do it today instead</button>`:``}`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${t.isToday?`Today's workout`:Jt(t)}</p>
        <h1>${F(n,i.title)}</h1>
      </header>

      ${r}

      ${ce(t.isToday)}
      ${I(t.isToday)}

      ${f}

      <details class="card switcher">
        <summary>Warm up first</summary>
        ${ae(i.warmUp,`warm-up`)}
      </details>

      <p class="tap-hint">Tap an exercise to see how to do it. ${m(i.prescription)}</p>
      <div class="exercise-list">${d}</div>

      <details class="card switcher">
        <summary>Cool down</summary>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${ae(i.coolDown,`warm-up`)}
      </details>

      ${Kn(n,u.current())}
      ${s?ie(n):``}

      ${l&&s?`<button type="button" class="link-button center" data-action="finish-workout">Mark done without workout mode</button>`:``}
    `}function ue(){let e=e=>r===e||e===`profile`&&r===`equipment`,t=(t,n)=>`<button type="button" class="nav-item${e(t)?` active`:``}"${e(t)?` aria-current="page"`:``} data-nav="${t}">${n}</button>`;return`<nav class="bottom-nav" aria-label="Main">${t(`today`,`Workout`)}${t(`progress`,`Progress`)}${t(`fuel`,`Fuel`)}${t(`profile`,`Profile`)}</nav>`}t.addEventListener(`change`,e=>{let t=e.target;if(t.dataset.field===`restore-file`){let e=t.files?.[0];e&&f.handleFileChosen(e);return}t.dataset.field===`cal-time`&&pe(t.value)?(n.calendar={...n.calendar,time:t.value},J(n)):t.dataset.field===`cal-minutes`&&de.includes(Number(t.value))&&(n.calendar={...n.calendar,minutes:Number(t.value)},J(n))}),t.addEventListener(`click`,c=>{let l=c.target.closest(`[data-point]`);if(l){let e=l.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=l.dataset.point??``);return}let m=c.target.closest(`button`);if(!m)return;let{group:h,value:S,action:C,day:T,date:E,nav:D,step:O,delta:k,exercise:A,index:te,planDay:j,planWorkout:M,workout:F}=m.dataset;if(O&&k){let e=t.querySelector(`input[data-field="${O}"]`);e&&(e.value=String(Math.max(0,(Number(e.value)||0)+Number(k))));return}if(j!==void 0&&M){let e=Number(j),t=M===`rest`?null:M,n=s.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){b(`Keep at least one workout day.`);return}s.weekPlan=n,w();return}if(h&&S){if(h===`goal`&&(s.goal=S),h===`experience`&&(s.experience=S),h===`area`){let e=S,t=s.protectedAreas;s.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}w();return}if(E){i=E,a=null,w();return}if(T){a=T,w();return}if(D){x(D);return}if(C){if(n.session){v.handleAction(C,te);return}if(r===`fuel`){g.handleAction(C,k,te);return}if(!(_.handleAction(C,S)||f.handleAction(C)||p.handleAction(C))){if(C===`save-profile`){let e=n.profile===null;n.profile={...s},e?(J(n),x(`equipment`)):(x(`today`),y(`Profile saved — your workouts are updated.`))}else if(C===`save-equipment`)n.equipmentIds=[...t.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``),n.equipmentConfirmed=!0,x(`today`),y(`Equipment saved.`);else if(C===`avoid`&&A)ee(A,!0),w(),y(`${o[A]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(C===`unavoid`&&A)ee(A,!1),w(),y(`${o[A]?.name??`That exercise`} is back in your workouts.`);else if(C===`go-equipment`)x(`equipment`);else if(C===`add-to-calendar`)Ht(d);else if(C===`easy-week-start`)n.deload=Ae(n.deload,new Date),J(n),w(),b(`Easy week is on. Every workout this week has one fewer set.`);else if(C===`easy-week-dismiss`)n.deload=Me(n.deload,new Date),J(n),w();else if(C===`easy-week-end`)n.deload=je(n.deload,new Date),J(n),w(),b(`Back to your normal sets.`);else if(C===`set-weight-unit`){let e=$e.find(e=>e===S);if(!e)return;n.weightUnit=e,J(n),w(),b(`Weights are now in ${it(e)}.`)}else if(C===`start-setup`)x(`profile`);else if(C===`play-music`&&F)u.play(F);else if(C===`stop-music`)u.stop();else if(C===`do-today`&&F)i=e(new Date),a=F,w(),window.scrollTo(0,0);else if(C===`start-workout`){let{shown:e}=P();if(!e)return;let t=_.today(),r=De(n.deload,new Date)?`easy`:t?ur(t):null;v.begin(N(e),r)}else if(C===`finish-workout`){let{shown:e}=P();if(!e)return;ne(e),x(`today`),y(`Nice work! It's marked done on your calendar.`)}}}}),p.check(),v.resume(),w()}var ui=document.querySelector(`#app`);ui&&li(ui),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});